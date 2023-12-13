import { Request, Response } from 'express'
import { HydratedDocument, ModifyResult } from 'mongoose'

import { IStore } from '../../models/store/type'
import Store from '../../models/store'
import { IRequest } from '../../types'
import { ResponseData } from '../../utils'

export const get = async (_: Request, response: Response) => {
  try {
    const stores: IStore[] = await Store.find({})

    ResponseData.withSuccess(response, stores)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const add = async (request: IRequest<IStore>, response: Response) => {
  try {
    const store: HydratedDocument<IStore> = new Store(request.body)

    await store.save()
    ResponseData.withSuccess(response, store)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const find = async (request: Request<Pick<IStore, 'id'>>, response: Response) => {
  try {
    const store: IStore | null = await Store.findById(request.params.id)
    if (!store)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, store)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const modify = async (request: IRequest<Omit<IStore, 'id'>>, response: Response) => {
  try {
    const store: IStore | null = await Store.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    })

    if (!store)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, store)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const remove = async (request: Request<Pick<IStore, 'id'>>, response: Response) => {
  try {
    const store: ModifyResult<IStore> | IStore = await Store.findByIdAndDelete(request.params.id)

    if (!store)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, store)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}
