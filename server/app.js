require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      mongoose = require('mongoose'),
      cors = require('cors')

const db = process.env.MONGO_URL

mongoose.connection.openUri(db, (err) => {
  if (err) console.log('database not connected')
  else console.log('database connected')
})

const users = require('./routes/users')
const memes = require('./routes/memes')

const app = express()

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/users', users)
app.use('/memes', memes)

app.get('/', (req, res) => res.send('Hello You Have Success Access'))

app.listen(3001, () => console.log('You are listening on 3001'))