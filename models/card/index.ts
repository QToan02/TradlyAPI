import { Schema, Types, model } from 'mongoose'
import { ICard } from './type'

const cardSchema = new Schema<ICard>(
  {
    name: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    expired: { type: String, required: true },
    cvc: { type: String, required: true },
    user: { type: Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

const Card = model<ICard>('Card', cardSchema)

export default Card
