import { Schema, model } from 'mongoose'
import { ICategory } from './type'

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true, unique: true },
})

const Category = model<ICategory>('Category', categorySchema)

export default Category
