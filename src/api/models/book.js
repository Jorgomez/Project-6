const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      required: true,
      enum: ['fiction', 'novel', 'narrative', 'poetry', 'mystery', 'drama']
    },
    yearPublication: { type: Number, required: true },
    available: { type: Boolean, default: true }
  },
  {
    timestamps: true,
    collection: 'books'
  }
)

const Book = mongoose.model('books', bookSchema, 'books')
module.exports = Book
