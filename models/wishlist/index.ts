import { Schema, Types, model } from 'mongoose'
import { IWishlist } from './type'

const wishlistSchema = new Schema<IWishlist>(
  {
    product: { type: Types.ObjectId, ref: 'Product' },
    user: { type: Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

const Wishlist = model<IWishlist>('Wishlist', wishlistSchema)

export default Wishlist
