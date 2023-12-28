import { Schema, Types, model } from 'mongoose'
import { IOrder, IOrderProduct } from './type'

const orderProductSchema = new Schema<IOrderProduct>({
  _id: { type: Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  discountPrice: { type: Number, default: 0 },
  quantity: { type: Number, required: true },
})

const orderSchema = new Schema<IOrder>(
  {
    product: [{ type: orderProductSchema, required: true }],
    user: { type: Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, default: 0, min: 0.0, max: 5.0 },
    total: { type: Number, required: true },
    address: { type: Types.ObjectId, ref: 'Address', required: true },
    payment: { type: Types.ObjectId, ref: 'Card', required: true },
    status: {
      type: String,
      enum: ['order placed', 'payment confirmed', 'processed', 'delivered'],
      default: 'order placed',
    },
  },
  { timestamps: true }
)

const Order = model<IOrder>('Order', orderSchema)

export default Order
