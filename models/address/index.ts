import { Schema, Types, model } from 'mongoose'
import { IAddress } from './type'

const addressSchema = new Schema<IAddress>(
  {
    name: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    user: { type: Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

const Address = model<IAddress>('Address', addressSchema)

export default Address
