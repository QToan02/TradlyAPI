import { Request, Response } from 'express'
import { HydratedDocument, ModifyResult } from 'mongoose'

import { IWishlist } from '../../models/wishlist/type'
import Wishlist from '../../models/wishlist'
import { IRequest } from '../../types'
import { ResponseData } from '../../utils'

export const get = async (request: Request, response: Response) => {
  const user = request.query.user as string | string[]

  try {
    const wishlists: IWishlist[] = await Wishlist.find({ user }).populate({
      path: 'product',
      populate: { path: 'store' },
    })

    ResponseData.withSuccess(response, wishlists)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const add = async (request: IRequest<IWishlist>, response: Response) => {
  try {
    const wishlist: HydratedDocument<IWishlist> = new Wishlist(request.body)

    await wishlist.save()

    const fonded: IWishlist[] | null = await Wishlist.findById(wishlist._id).populate({
      path: 'product',
      populate: { path: 'store' },
    })

    if (!fonded) return ResponseData.withError(response, 'Error in saving process')

    ResponseData.withSuccess(response, fonded)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const find = async (request: Request<Pick<IWishlist, 'id'>>, response: Response) => {
  try {
    const wishlist: IWishlist | null = await Wishlist.findById(request.params.id)
      .populate('user')
      .exec()
    if (!wishlist)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, wishlist)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const modify = async (request: IRequest<Omit<IWishlist, 'id'>>, response: Response) => {
  try {
    const wishlist: IWishlist | null = await Wishlist.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    )

    if (!wishlist)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, wishlist)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const remove = async (request: Request<Pick<IWishlist, 'id'>>, response: Response) => {
  try {
    const wishlist: ModifyResult<IWishlist> | IWishlist = await Wishlist.findByIdAndDelete(
      request.params.id
    )

    if (!wishlist)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, wishlist)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}
