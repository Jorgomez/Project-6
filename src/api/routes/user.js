const {
  getUserById,
  getAllUsers,
  postUser,
  updateUser,
  deleteUser,
  getUserByName,
  getUserByBorrowedBooks
} = require('../controllers/user')

const userRoutes = require('express').Router()

userRoutes.get('/:id', getUserById)
userRoutes.get('/getByName/:name', getUserByName)
userRoutes.get('/getUser/:borrowedBooks', getUserByBorrowedBooks)
userRoutes.get('/', getAllUsers)
userRoutes.post('/', postUser)
userRoutes.put('/:id', updateUser)
userRoutes.delete('/:id', deleteUser)

module.exports = userRoutes
