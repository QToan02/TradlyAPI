import dotenv from 'dotenv'
dotenv.config()

import express, { Express, Request, Response } from 'express'
import { connectDB } from './server/db'
import cors from 'cors'

const app: Express = express()
const port = process.env.PORT || 8000

connectDB()

app.use(express.json())
app.use(cors())
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to TradlyAPI')
})
app.use('/auth', require('./routes/auth'))
app.use('/api', require('./routes/address'))
app.use('/api', require('./routes/card'))
app.use('/api', require('./routes/category'))
app.use('/api', require('./routes/store'))
app.use('/api', require('./routes/product'))

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
