const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  age: {
    type: Number
  },
  password: {
    type: String
  },
  email: {
    type: String
  }
})

userSchema.pre('save', function (next) {
  let hash = bcrypt.hashSync(this.password, 10)
  this.password = hash
  next()
})

const User = mongoose.model('users', userSchema)

module.exports = User