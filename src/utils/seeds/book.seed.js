const Book = require('../../api/models/book')
const BOOKS = require('../../data/book')
const mongoose = require('mongoose')

const bomb = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://jorgomez:root@cluster0.zlm2yt4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

    await Book.collection.drop()
    console.log('books deleted')

    await Book.insertMany(BOOKS)
    console.log('movies introduced')

    await mongoose.disconnect()
    console.log('server desconected')
  } catch (error) {
    console.log('error connecting')
  }
}

bomb()
