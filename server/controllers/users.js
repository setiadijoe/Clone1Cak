require('dotenv').config()
const User = require('../models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const key = process.env.JWT_SECRET

const getAllUsers = (req, res) => {
  User.find()
    .then(userData => {
      res.status(200).send(userData)
    })
    .catch(err => res.status(500).send(err))
}

const signUpUser = (req, res) => {
  let user = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
    email: req.body.email
  })
  user.save()
    .then(newUser => {
      res.status(200).send({
        message: 'New User is coming',
        newUser
      })
    })
    .catch(err => res.status(500).send(err))
}

const signInUser = (req, res) => {
  User.findOne({ username: req.body.username })
  .then(userData => {
    if (bcrypt.compareSync(req.body.password, userData.password)) {
        let payload = {
          id: userData._id,
          name: userData.name,
          username: userData.username,
          age: userData.age,
          email: userData.email
        }
        let token = jwt.sign(payload, key)
        res.status(200).send({ message: 'User has succesfully login', token })
      } else {
        res.status(401).send({ message: 'password or username not valid' })
      }
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

module.exports = {
  getAllUsers,
  signUpUser,
  signInUser
}
