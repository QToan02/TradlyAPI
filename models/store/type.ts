import { Document } from 'mongoose'
import { IUser } from '../user/type'

export interface IStore extends Document {
  name: string
  avatar: string
  description: string
  type: string
  address: string
  city: string
  state: string
  country: string
  courierName: string
  user: IUser
}
