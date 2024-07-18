require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const bookRoutes = require('./src/api/routes/books')
const userRoutes = require('./src/api/routes/user')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/v1/books', bookRoutes)
app.use('/api/v1/users', userRoutes)

app.use('/ping', (req, res, next) => {
  return res.status(200).json('pong')
})

app.use('*', (req, res, next) => {
  return res.status(404).json('route not found')
})

app.listen(3000, () => {
  console.log('Server deployed at http://localhost:3000')
})
