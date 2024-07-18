const User = require('../models/user')

const postUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body)

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
    const oldUser = await User.findById(id)
    const updateUser = new User(req.body)
    updateUser._id = id
    updateUser.borrowedBooks = [
      ...oldUser.borrowedBooks,
      ...req.body.borrowedBooks
    ]
    const UserUpdated = await User.findByIdAndUpdate(id, updateUser, {
      new: true
    })
    return res.status(200).json(UserUpdated)
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
