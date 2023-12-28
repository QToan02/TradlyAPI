import { Schema, Types, model } from 'mongoose'
import { IStore } from './type'

const storeSchema = new Schema<IStore>(
  {
    name: { type: String, required: true },
    avatar: {
      type: String,
      default:
        'https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453',
    },
    description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nunc vel rhoncus, sed. Neque hendrerit risus ut metus ultrices ac. Dui morbi eu amet id mauris. Eget at ut.',
    },
    type: String,
    address: String,
    city: String,
    state: String,
    country: String,
    courierName: String,
    user: { type: Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

const Store = model<IStore>('Store', storeSchema)

export default Store
