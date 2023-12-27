import { Document } from 'mongoose'
import { IUser } from '../user/type'
import { IProduct } from '../product/type'

export interface IWishlist extends Document {
  product: IProduct
  user: IUser
}
