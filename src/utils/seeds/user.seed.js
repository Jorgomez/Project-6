const User = require('../../api/models/user')
const mongoose = require('mongoose')
const USERS = require('../../data/user')

const bombUsers = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://jorgomez:root@cluster0.zlm2yt4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

    await User.collection.drop()
    console.log('users deleted')

    await User.insertMany(USERS)
    console.log('users introduced')

    await mongoose.disconnect()
    console.log('server desconected')
  } catch (error) {
    console.log('error connecting')
  }
}

bombUsers()
