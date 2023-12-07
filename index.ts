import dotenv from 'dotenv'
dotenv.config()

import express, { Express, Request, Response } from 'express'
import { connectDB } from './server/db'

const app: Express = express()
const port = process.env.PORT || 8000

connectDB()

app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to TradlyAPI')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
