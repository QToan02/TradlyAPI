import { Response } from 'express'
import { HydratedDocument } from 'mongoose'
import jwt from 'jsonwebtoken'

import { IUser, IUserMethods } from '../../models/user/type'
import User from '../../models/user'
import { IRequest } from '../../types'
import { ResponseData } from '../../util'

export const register = async (request: IRequest<IUser>, response: Response) => {
  try {
    const user: HydratedDocument<IUser> = new User(request.body)

    await user.save()
    ResponseData.withSuccess(response, user)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const login = async (
  request: IRequest<Pick<IUser, 'email' | 'password'>>,
  response: Response
) => {
  try {
    const { email, password } = request.body
    const findUser: (IUser & IUserMethods) | null = await User.findOne({ email })
      .select('password')
      .exec()

    if (!findUser)
      return ResponseData.withError(response, 'Wrong credentials, check your email or password')

    const matchPassword: boolean = await findUser.matchPassword(password)

    if (!matchPassword)
      return ResponseData.withError(response, 'Wrong credentials, check your email or password')

    const token = generateToken(findUser)

    ResponseData.withSuccess(response, token)
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const generateToken = (payload: object | string | Buffer): { token: string } => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })

  return { token }
}
