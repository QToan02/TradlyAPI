import { Response } from 'express'
import { HydratedDocument } from 'mongoose'
import jwt, { Secret } from 'jsonwebtoken'

import { IUser, IUserMethods } from '../../models/user/type'
import User from '../../models/user'
import { IRequest, TToken } from '../../types'
import { ResponseData, sendMail } from '../../utils'
import { confirmEmailTemplate } from '../../templates/mail'

export const register = async (request: IRequest<IUser>, response: Response) => {
  const { email, firstName } = request.body

  try {
    const user: HydratedDocument<IUser> = new User(request.body)
    sendMail(email, 'Confirm account information!!!', confirmEmailTemplate(firstName, ''))

    const token: TToken = generateToken({ id: user._id })

    await user.save()
    ResponseData.withSuccess(
      response,
      user.toJSON({
        transform: (_, ret) => ({ ...ret, ...token }),
      })
    )
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
      .select('+password')
      .exec()

    if (!findUser)
      return ResponseData.withError(response, 'Wrong credentials, check your email or password')

    const matchPassword: boolean = await findUser.matchPassword(password)

    if (!matchPassword)
      return ResponseData.withError(response, 'Wrong credentials, check your email or password')

    const token: TToken = generateToken({ id: findUser._id })

    ResponseData.withSuccess(
      response,
      findUser.toJSON({
        transform: (_, ret) => ({ ...ret, ...token }),
      })
    )
  } catch (error) {
    if (error instanceof Error) ResponseData.withError(response, error.message)
  }
}

export const generateToken = (payload: object | string | Buffer): TToken => {
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET as Secret, {
    expiresIn: process.env.JWT_EXPIRE,
  })

  const refreshToken = jwt.sign(payload, process.env.SECRET as Secret, {
    expiresIn: process.env.EXPIRE,
  })

  return { accessToken, refreshToken }
}
