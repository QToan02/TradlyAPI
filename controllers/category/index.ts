import { Request, Response } from 'express'

import Category from '../../models/category'
import { ICategory } from '../../models/category/type'
import { ResponseData } from '../../util'

export const get = async (_: Request, response: Response) => {
  try {
    const cards: ICategory[] = await Category.find({})

    ResponseData.withSuccess(response, cards)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}
