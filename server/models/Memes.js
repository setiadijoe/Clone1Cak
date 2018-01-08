const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memeSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  imageUrl: {
    type: String,
    require: true
  },
  author: {
    type: Schema.ObjectId, 
    ref: 'users'
  },
  funny: [{
    type: Schema.ObjectId,
    ref: 'users'
  }],
  comments: [{
    memeId: {type: Schema.ObjectId,
    ref: 'memes'},
    comment: String,
    username: String
  }],
  createdAt: {
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
})

const Meme = mongoose.model('memes', memeSchema)

module.exports = Meme;