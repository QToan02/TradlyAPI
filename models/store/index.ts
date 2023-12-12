import { Schema, Types, model } from 'mongoose'
import { IStore } from './type'

const storeSchema = new Schema<IStore>(
  {
    name: { type: String, required: true },
    avatar: { type: String, required: true },
    user: { type: Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

const Store = model<IStore>('Store', storeSchema)

export default Store
