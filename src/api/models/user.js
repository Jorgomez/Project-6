const mongoose = require('mongoose')

const userShema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    registrationDate: { type: Date, default: Date.now },
    borrowedBooks: [{ type: mongoose.Types.ObjectId, ref: 'books' }]
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

const User = mongoose.model('users', userShema, 'users')

module.exports = User
