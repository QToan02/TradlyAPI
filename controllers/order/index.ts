import { Request, Response } from 'express'
import { HydratedDocument } from 'mongoose'

import { IOrder, IOrderProduct, IOrderRequestBody } from '../../models/order/type'
import { IProduct } from '../../models/product/type'
import { IRequest } from '../../types'
import { ResponseData } from '../../utils'
import Order from '../../models/order'
import Product from '../../models/product'

export const add = async (request: IRequest<IOrderRequestBody>, response: Response) => {
  const { productId, quantity, ...rest } = request.body
  const productData: IProduct[] = []

  try {
    // TODO: Refactor to Promise.all
    // Get all product information in product array based on _id
    for (const id of productId) {
      const result: IProduct | null = await Product.findById(id)
        .select(['name', 'img', 'price', 'discountPrice'])
        .exec()

      if (!result) return ResponseData.withError(response, "Some products in cart can't find", 400)

      productData.push(result)
    }

    // Check error when miss match array data
    if (productId.length !== productData.length || quantity.length !== productData.length)
      return ResponseData.withError(
        response,
        "There's error in adding process, please try again later"
      )

    // Merge product information to request.body.product
    const newProductData: IOrderProduct[] = productData.map(
      (item: IProduct, index: number) =>
        ({
          ...item,
          ...{ quantity: quantity[index] },
        } as IOrderProduct)
    )

    const order: HydratedDocument<IOrder> = new Order({ ...rest, product: newProductData })

    await order.save()
    ResponseData.withSuccess(response, order)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const find = async (request: Request<Pick<IOrder, 'id'>>, response: Response) => {
  try {
    const order: IOrder | null = await Order.findById(request.params.id)

    if (!order)
      return ResponseData.withError(response, "Can't find order match with provided ID", 404)

    ResponseData.withSuccess(response, order)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const modify = async (request: IRequest<Omit<IOrder, 'id'>>, response: Response) => {
  try {
    const order: IOrder | null = await Order.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    })

    if (!order)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, order)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}
