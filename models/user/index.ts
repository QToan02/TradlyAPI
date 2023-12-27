import { CallbackWithoutResultAndOptionalError, Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

import { IUser, IUserMethods, UserModel } from './type'

const userSchema = new Schema<IUser, UserModel, IUserMethods>(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    avatar: { type: String, default: 'https://i.imgur.com/dM7Thhn.png' },
    status: { type: String, enum: ['active', 'in-active'], default: 'in-active' },
  },
  { timestamps: true }
)

userSchema.pre<IUser>('save', async function (next: CallbackWithoutResultAndOptionalError) {
  if (!this.isModified('password')) {
    return next()
  }

  this.password = bcrypt.hashSync(this.password, 10)
  next()
})

userSchema.method('matchPassword', async function (password: string) {
  return await bcrypt.compare(password, this.password)
})

const User = model<IUser, UserModel>('User', userSchema)

export default User
