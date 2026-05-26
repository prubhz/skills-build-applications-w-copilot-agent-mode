import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT ?? 8000
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/octofit'

app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ status: 'OctoFit Tracker backend is running' })
})

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB at', MONGO_URI)
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error)
    process.exit(1)
  })
