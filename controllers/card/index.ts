import { Request, Response } from 'express'
import { HydratedDocument, ModifyResult } from 'mongoose'

import { ICard } from '../../models/card/type'
import Card from '../../models/card'
import { IRequest } from '../../types'
import { ResponseData } from '../../util'

export const get = async (_: Request, response: Response) => {
  try {
    const cards: ICard[] = await Card.find({})

    ResponseData.withSuccess(response, cards)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const add = async (request: IRequest<ICard>, response: Response) => {
  try {
    const card: HydratedDocument<ICard> = new Card(request.body)

    await card.save()
    ResponseData.withSuccess(response, card)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const find = async (request: Request<Pick<ICard, 'id'>>, response: Response) => {
  try {
    const card: ICard | null = await Card.findById(request.params.id).populate('user').exec()
    if (!card)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, card)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const modify = async (request: IRequest<Omit<ICard, 'id'>>, response: Response) => {
  try {
    const card: ICard | null = await Card.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    })

    if (!card)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, card)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const remove = async (request: Request<Pick<ICard, 'id'>>, response: Response) => {
  try {
    const card: ModifyResult<ICard> | ICard = await Card.findByIdAndDelete(request.params.id)

    if (!card)
      return ResponseData.withError(response, "Can't find item match with provided ID", 404)

    ResponseData.withSuccess(response, card)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}
