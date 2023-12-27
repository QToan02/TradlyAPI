import { Request, Response } from 'express'
import { HydratedDocument, ModifyResult } from 'mongoose'

import { IProduct } from '../../models/product/type'
import Product from '../../models/product'
import { IRequest } from '../../types'
import { ResponseData } from '../../utils'

export const get = async (request: Request, response: Response) => {
  const pageNumber: number = parseInt(request.query.pageNumber as string) || 1
  const pageSize: number = parseInt(request.query.pageSize as string) || 10
  const expand = request.query._expand as string | string[]

  try {
    const currentPage: number = pageNumber > 0 ? pageNumber : 1
    const itemsPerPage: number = pageSize > 0 ? pageSize : 10

    const totalProducts: number = await Product.countDocuments() // Get total number of products

    const products: IProduct[] = await Product.find()
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
