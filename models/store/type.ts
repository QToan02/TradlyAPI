import { Document } from 'mongoose'
import { IUser } from '../user/type'

export interface IStore extends Document {
  name: string
  avatar: string
  user: IUser
}
