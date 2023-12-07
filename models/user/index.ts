import { Schema, model } from 'mongoose'

import { IUser } from './type'

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  avatar: String,
})

const User = model<IUser>('User', userSchema)

export default User
