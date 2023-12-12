import { Schema, Types, model } from 'mongoose'
import { IProduct } from './type'

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  discountPrice: { type: Number, default: 0 },
  description: { type: String, required: true },
  condition: { type: String, required: true },
  priceType: { type: String, required: true },
  location: { type: String, required: true },
  delivery: { type: String, required: true },
  store: { type: Types.ObjectId, ref: 'Store' },
  category: { type: Types.ObjectId, ref: 'Category' },
})

const Product = model<IProduct>('Product', productSchema)

export default Product
