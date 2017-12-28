require('dotenv').config()
const jwt = require('jsonwebtoken')
const key = process.env.JWT_SECRET

const hasLogin = (req, res, next) => {
  jwt.verify(req.headers.token, key, (err, decoded) => {
    if (err) {
      res.send({ message: 'you are not logged' })
    } else {
      req.headers = decoded
      console.log('Isi data terauthentikasi ', req.headers)
      next()
    }
  })
}

module.exports = {
  hasLogin
}