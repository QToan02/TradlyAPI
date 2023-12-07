import { connect } from 'mongoose'

const connectionString = process.env.ATLAS_URI || ''
export const connectDB = async () => {
  try {
    connect(connectionString)
    console.log('Server connected to DB')
  } catch (error) {
    if (error instanceof Error) console.error(error.message)
  }
}
