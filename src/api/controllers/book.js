const Book = require('../models/book')

const postBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body)

    const booksaved = await newBook.save()
    return res.status(201).json(booksaved)
  } catch (error) {
    return res.status(404).json('something wrong with the postBook function')
  }
}

const getAllBooks = async (req, res, next) => {
  try {
    allBooks = await Book.find()
    return res.status(200).json(allBooks)
  } catch (error) {
    return res.status(404).json('something wrong with the getAllBooks function')
  }
}

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params
    bookFound = await Book.findById(id)
    return res.status(200).json(bookFound)
  } catch (error) {
    return res.status(404).json('something wrong with the getBookById function')
  }
}

const getBookByGenre = async (req, res, next) => {
  try {
    const { genre } = req.params

    booksFound = await Book.find({ genre })
    return res.status(200).json(booksFound)
  } catch (error) {
    return res
      .status(404)
      .json('something wrong with the getBookByGenre function')
  }
}

const getBookByPages = async (req, res, next) => {
  try {
    const { pages } = req.params
    booksFound = await Book.find({ paginas: { $lte: pages } })
    return res.status(200).json(booksFound)
  } catch (error) {
    return res
      .status(404)
      .json('something wron with the getBookByPages function')
  }
}

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateBook = new Book(req.body)
    updateBook._id = id
    const BookUpdated = await Book.findByIdAndUpdate(id, updateBook, {
      new: true
    })
    return res.status(200).json(BookUpdated)
  } catch (error) {
    return res.status(400).json('error to update')
  }
}
const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const bookDeleted = await Book.findByIdAndDelete(id)
    return res.status(200).json(bookDeleted)
  } catch (error) {
    return res.status(400).json('error')
  }
}
module.exports = {
  postBook,
  getAllBooks,
  getBookById,
  getBookByGenre,
  getBookByPages,
  updateBook,
  deleteBook
}
