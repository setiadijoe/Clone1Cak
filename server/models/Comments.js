const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  memeId: {
    type: Schema.ObjectId,
    ref: 'memes'
  },
  author: {
    type: Schema.ObjectId,
    ref: 'users'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const Comment = mongoose.model('comments', commentSchema)

module.exports = Comment;