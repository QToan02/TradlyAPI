import { Document } from 'mongoose'

import { IProduct } from '../product/type'
import { IUser } from '../user/type'
import { IAddress } from '../address/type'
import { ICard } from '../card/type'

export type TOrderStatus =
  | 'order placed'
  | 'payment confirmed'
  | 'processed'
  | 'delivered'
  | 'cancelled'

export interface IOrderProduct extends IProduct {
  quantity: number
}

export interface IOrder extends Document {
  product: IOrderProduct[]
  user: IUser
  rating: number
  total: number
  address: IAddress
  payment: ICard | string
  status: TOrderStatus
}

export interface IOrderRequestBody extends Omit<IOrder, 'product'> {
  productId: string[]
  quantity: number[]
}
