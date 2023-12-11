import { Request, Response } from 'express'
import { HydratedDocument, ModifyResult } from 'mongoose'

import { IAddress } from '../../models/address/type'
import Address from '../../models/address'
import { IRequest } from '../../types'
import { ResponseData } from '../../util'

export const get = async (_: Request, response: Response) => {
  try {
    const addresses: IAddress[] = await Address.find({})

    ResponseData.withSuccess(response, addresses)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const add = async (request: IRequest<IAddress>, response: Response) => {
  try {
    const address: HydratedDocument<IAddress> = new Address(request.body)

    await address.save()
    ResponseData.withSuccess(response, address)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const find = async (request: Request<Pick<IAddress, 'id'>>, response: Response) => {
  try {
    const address: IAddress | null = await Address.findById(request.params.id)
      .populate('user')
      .exec()
    if (!address)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, address)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const modify = async (request: IRequest<Omit<IAddress, 'id'>>, response: Response) => {
  try {
    const address: IAddress | null = await Address.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    )

    if (!address)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, address)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const remove = async (request: Request<Pick<IAddress, 'id'>>, response: Response) => {
  try {
    const address: ModifyResult<IAddress> | IAddress = await Address.findByIdAndDelete(
      request.params.id
    )

    if (!address)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, address)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}
