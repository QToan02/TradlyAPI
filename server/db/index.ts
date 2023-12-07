import { MongoClient } from 'mongodb'

const connectionString = process.env.ATLAS_URI || ''
const client = new MongoClient(connectionString)

export const connectDB = async () => {
  try {
    await client.connect()
    console.log('Server connected to DB')
  } catch (error) {
    if (error instanceof Error) console.error(error.message)
  }
}
