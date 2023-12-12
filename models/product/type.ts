import { Document } from 'mongoose'
import { IStore } from '../store/type'
import { ICategory } from '../category/type'

export interface IProduct extends Document {
  name: string
  img: string
  price: number
  discountPrice: number
  description: string
  condition: string
  priceType: string
  location: string
  delivery: string
  store: IStore
  category: ICategory
}
