require('dotenv').config()
const jwt = require('jsonwebtoken')
const key = process.env.JWT_SECRET

const hasLogin = (req, res, next) => {
  jwt.verify(req.headers.token, key, (err, decode) => {
    if (err) {
      res.send({
        message: 'You are not login',
        err
      })
    } else {
      req.headers = decode
      next()
    }
  })
}

module.exports = {
  hasLogin
}