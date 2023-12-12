import { Document } from 'mongoose'
import { IUser } from '../user/type'

export interface ICard extends Document {
  name: string
  number: string
  expired: string
  cvc: string
  user: IUser
}
