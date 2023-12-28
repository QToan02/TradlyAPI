import { Request, Response } from 'express'
import { HydratedDocument, ModifyResult } from 'mongoose'
import * as mathjs from 'mathjs'
import similarity from 'compute-cosine-similarity'

import { IProduct } from '../../models/product/type'
import { IUser } from '../../models/user/type'
import { IOrder } from '../../models/order/type'
import Product from '../../models/product'
import User from '../../models/user'
import Order from '../../models/order'
import { IRequest } from '../../types'
import { ResponseData } from '../../utils'

export const get = async (request: Request, response: Response) => {
  const pageNumber: number = parseInt(request.query.pageNumber as string) || 1
  const pageSize: number = parseInt(request.query.pageSize as string) || 10
  const expand = request.query._expand as string | string[]
  const store = request.query.store as string
  const searchQuery = store ? { store } : {}

  try {
    const currentPage: number = pageNumber > 0 ? pageNumber : 1
    const itemsPerPage: number = pageSize > 0 ? pageSize : 10

    const totalProducts: number = await Product.countDocuments() // Get total number of products

    const products: IProduct[] = await Product.find(searchQuery)
      .populate(expand) // Expand document based on expand value
      .skip((currentPage - 1) * itemsPerPage) // Skip items based on current page
      .limit(itemsPerPage) // Limit items per page

    const totalPages: number = Math.ceil(totalProducts / itemsPerPage)

    ResponseData.withSuccess(response, {
      currentPage,
      totalPages,
      totalProducts,
      pageSize: itemsPerPage,
      products,
    })
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const add = async (request: IRequest<IProduct>, response: Response) => {
  try {
    const product: HydratedDocument<IProduct> = new Product(request.body)

    await product.save()
    ResponseData.withSuccess(response, product)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const find = async (request: Request<Pick<IProduct, 'id'>>, response: Response) => {
  const expand = request.query._expand as string | string[]

  try {
    const product: IProduct | null = await Product.findById(request.params.id).populate(expand)
    if (!product)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, product)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const modify = async (request: IRequest<Omit<IProduct, 'id'>>, response: Response) => {
  try {
    const product: IProduct | null = await Product.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    )

    if (!product)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, product)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const remove = async (request: Request<Pick<IProduct, 'id'>>, response: Response) => {
  try {
    const product: ModifyResult<IProduct> | IProduct = await Product.findByIdAndDelete(
      request.params.id
    )

    if (!product)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, product)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const getRecommended = async (request: Request, response: Response) => {
  try {
    const user: IUser | null = await User.findById(request.query.userId)
    if (!user)
      return ResponseData.withError(response, "Can't find user match with provided ID", 404)

    const pageNumber: number = parseInt(request.query.pageNumber as string) || 1
    const pageSize: number = parseInt(request.query.pageSize as string) || 10
    const expand = request.query._expand as string | string[]
    const k = 5

    const currentPage: number = pageNumber > 0 ? pageNumber : 1
    const itemsPerPage: number = pageSize > 0 ? pageSize : 10

    const totalProducts: number = await Product.countDocuments()

    const recommendedProducts: IProduct[] = (
      await recommendProducts(request.query.userId as string, k, expand)
    ).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    const totalPages: number = Math.ceil(totalProducts / itemsPerPage)

    ResponseData.withSuccess(response, {
      currentPage,
      totalPages,
      totalProducts,
      pageSize: itemsPerPage,
      recommendedProducts,
    })
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

const recommendProducts = async (
  userId: string,
  k: number,
  expand: string | string[]
): Promise<IProduct[]> => {
  const orders: IOrder[] = await Order.find()
  const products: IProduct[] = await Product.find().populate(expand)
  const users: IUser[] = await User.find()

  const usersLength: number = users.length
  const productsLength: number = products.length
  var userIndex: number = -1

  const matrix: number[][] = []
  for (let i = 0; i < usersLength; i++) {
    matrix[i] = []
    for (let j = 0; j < productsLength; j++) {
      const userOrders: IOrder[] = orders.filter(
        (order) =>
          order.user._id.equals(users[i]._id) &&
          order.product.some((p) => p._id.equals(products[j]._id))
      )
      const ratings: number[] = userOrders.map((order) => order.rating)
      const averageRating: number = ratings.length > 0 ? mathjs.mean(ratings) : 0
      matrix[i][j] = averageRating
    }
    if (String(users[i]._id) === userId) userIndex = i
  }

  const normalizedMatrix: number[][] = meanNormalizeByRowVector(matrix)
  const userRatingsRowVector: number[] = normalizedMatrix[userIndex]

  const cosineSimilarityRowVector: (number | null)[] = getCosineSimilarityRowVector(
    normalizedMatrix,
    userIndex
  )

  const predictedRatings: {
    score: number
    productIndex: number
  }[] = userRatingsRowVector.map((rating, productIndex) => {
    const productRatingsRowVector: (number | null)[] = getProductRatingsRowVector(
      normalizedMatrix,
      productIndex
    )

    let score: number
    if (rating === 0) {
      score = getPredictedRating(productRatingsRowVector, cosineSimilarityRowVector, k)
    } else {
      score = rating
    }

    return { score, productIndex }
  })

  predictedRatings.sort((a, b) => b.score - a.score)

  const recommendedProducts: IProduct[] = predictedRatings.map(
    (rating) => products[rating.productIndex]
  )

  return recommendedProducts
}

const getMean = (rowVector: number[]): number => {
  const valuesWithoutZeroes: number[] = rowVector.filter((cell) => cell !== 0)
  return valuesWithoutZeroes.length ? mathjs.mean(valuesWithoutZeroes) : 0
}

const meanNormalizeByRowVector = (matrix: number[][]) => {
  return matrix.map((rowVector) => {
    return rowVector.map((cell) => {
      return cell !== 0 ? cell - getMean(rowVector) : cell
    })
  })
}

const getCosineSimilarityRowVector = (matrix: number[][], index: number): (number | null)[] => {
  return matrix.map((rowRelative, i) => {
    return similarity(matrix[index], matrix[i])
  })
}

const getProductRatingsRowVector = (
  userBasedMatrix: number[][],
  productIndex: number
): (number | null)[] => {
  return userBasedMatrix.map((userRatings) => {
    return userRatings[productIndex]
  })
}

const getPredictedRating = (
  ratingsRowVector: (number | null)[],
  cosineSimilarityRowVector: (number | null)[],
  k: number
): number => {
  const neighborSelection: {
    similarity: number | null
    rating: number | null
  }[] = cosineSimilarityRowVector
    .map((similarity, index) => ({ similarity, rating: ratingsRowVector[index] }))
    .filter((value) => value.similarity !== null && value.rating !== null && value.rating !== 0)
    .sort((a, b) => (b.similarity as number) - (a.similarity as number))
    .slice(0, k)

  const numerator: number = neighborSelection.reduce((result, value) => {
    return result + (value.similarity as number) * (value.rating as number)
  }, 0)

  const denominator: number = neighborSelection.reduce((result, value) => {
    return result + (value.similarity as number) ** 2
  }, 0)

  return denominator !== 0 ? numerator / Math.sqrt(denominator) : 0
}
