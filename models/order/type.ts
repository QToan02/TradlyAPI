import { Document } from 'mongoose'
import { IProduct } from '../product/type'
import { IUser } from '../user/type'

export interface IOrderProduct extends IProduct {
  quantity: number
}

export interface IOrder extends Document {
  product: IOrderProduct[]
  user: IUser
  rating: number
  total: number
  status: 'order placed' | 'payment confirmed' | 'processed' | 'delivered'
}
