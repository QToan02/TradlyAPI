import { Document } from 'mongoose'
import { IUser } from '../user/type'

export interface IAddress extends Document {
  name: string
  phone: string
  streetAddress: string
  city: string
  state: string
  zipCode: string
  user: IUser
}
