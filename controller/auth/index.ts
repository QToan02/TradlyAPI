import { Request, Response } from 'express'
import { IUser } from '../../models/user/type'
import { HydratedDocument } from 'mongoose'
import User from '../../models/user'

export const register = async (request: Request, response: Response) => {
  const { email, firstName, lastName, password, phone, avatar }: IUser = request.body

  try {
    const user: HydratedDocument<IUser> = new User({
      email,
      firstName,
      lastName,
      password,
      phone,
      avatar,
    })

    await user.save()
    response.send(user)
  } catch (error) {
    if (error instanceof Error) console.error(error.message)
  }
}
