const {
  getBookById,
  getBookByGenre,
  getBookByPages,
  getAllBooks,
  postBook,
  updateBook,
  deleteBook
} = require('../controllers/book')

const bookRoutes = require('express').Router()

bookRoutes.get('/:id', getBookById)
bookRoutes.get('/getByGenre/:genre', getBookByGenre)
bookRoutes.get('/getByPages/:pages', getBookByPages)
bookRoutes.get('/', getAllBooks)
bookRoutes.post('/', postBook)
bookRoutes.put('/:id', updateBook)
bookRoutes.delete('/:id', deleteBook)

module.exports = bookRoutes
