import { Document, Model } from 'mongoose'

export interface IUser extends Document {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  avatar?: string
  status: 'active' | 'in-active'
}

export interface IUserMethods {
  matchPassword: (password: string) => boolean | Promise<boolean>
}

export type UserModel = Model<IUser, {}, IUserMethods>
