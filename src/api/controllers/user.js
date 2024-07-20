const User = require('../models/user')

const postUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body)
    const { borrowedBooks: newbooks = [] } = req.body
    const newBookSet = new Set()
    for (let bookId of newbooks) {
      if (newBookSet.has(bookId.toString())) {
        return res
          .status(400)
          .json({ message: `Duplicate book ID in request: ${bookId}` })
      }
      newBookSet.add(bookId.toString())
    }

    const userSaved = await newUser.save()
    return res.status(201).json(userSaved)
  } catch (error) {
    return res.status(404).json('something wrong with the postUser function')
  }
}

const getAllUsers = async (req, res, next) => {
  try {
    allUsers = await User.find().populate('borrowedBooks')
    return res.status(200).json(allUsers)
  } catch (error) {
    return res.status(404).json('something wrong with the getAllUsers function')
  }
}

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params
    userFound = await User.findById(id).populate('borrowedBooks')
    return res.status(200).json(userFound)
  } catch (error) {
    return res.status(404).json('something wrong with the getUserById function')
  }
}

const getUserByName = async (req, res, next) => {
  try {
    const { name } = req.params

    usersFound = await User.find({ name }).populate('borrowedBooks')
    return res.status(200).json(usersFound)
  } catch (error) {
    return res
      .status(404)
      .json('something wrong with the getUserByName function')
  }
}

const getUserByBorrowedBooks = async (req, res, next) => {
  try {
    const { borrowedBooks } = req.params
    usersFound = await User.find({ borrowedBooks })
    return res.status(200).json(usersFound.params)
  } catch (error) {
    return res
      .status(404)
      .json('something wrong with the getUserByBorrowedBooks function')
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const changeReq = req.body
    const { borrowedBooks: newbooks = [] } = req.body
    const newBookSet = new Set()
    for (let bookId of newbooks) {
      if (newBookSet.has(bookId.toString())) {
        return res
          .status(400)
          .json({ message: `Duplicate book ID in request: ${bookId}` })
      }
      newBookSet.add(bookId.toString())
    }

    for (let bookId of newbooks) {
      const duplicateBook = await User.findOne({
        _id: id,
        borrowedBooks: bookId
      })
      if (duplicateBook) {
        return res
          .status(400)
          .json({ message: `Duplicate book ID found: ${bookId}` })
      }
    }
    changeReq.borrowedBooks = [
      ...(await User.findById(id)).borrowedBooks,
      ...newbooks
    ]

    const updatedUser = await User.findByIdAndUpdate(id, changeReq, {
      new: true
    })

    return res.status(200).json(updatedUser)
  } catch (error) {
    return res.status(400).json('error to update')
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const userDeleted = await User.findByIdAndDelete(id)
    return res.status(200).json(userDeleted)
  } catch (error) {
    return res.status(400).json('error')
  }
}
module.exports = {
  postUser,
  getAllUsers,
  getUserById,
  getUserByName,
  getUserByBorrowedBooks,
  updateUser,
  deleteUser
}
