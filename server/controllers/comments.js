const Komen = require('../models/Comments');

const getAllComments = (req, res) => {
  Komen.find()
    .populate('memeId')
    .populate('author')
    .then(comments => res.status(200).send(comments))
    .catch(err => res.status(500).send(err))
}

const getCommentsByMeme = (req, res) => {
  Komen.find({memeId: req.params.memeId})
    .populate('author')
    .populate('memeId')
    .then(comments => res.status(200).send(comments))
    .catch(err => res.status(500).send(err))
}

const createComment = (req, res) => {
  let comment = new Komen({
    content: req.body.content,
    memeId: req.params.memeId,
    author: req.headers.id
  })
  comment.save()
    .then(newComment => {
      res.status(200).send({
        message: 'New Comment has been created',
        newComment
      })
    })
    .catch(err => res.status(500).send(err))
}

const updateComment = (req, res) => {
  Komen.findByIdAndUpdate(req.params.id, {
    $set: {
      content: req.body.content
    }
  }, {new: true})
    .then(updating => {
      res.status(200).send({
        message: 'A comment has been updated',
        updating
      })
    })
    .catch(err => res.status(500).send(err))
}

const removeComment = (req, res) => {
  Komen.findByIdAndRemove(req.params.id)
    .then(removed => {
      res.status(200).send({
        message: 'A comment has been removed',
        removed
      })
    })
    .catch(err => res.status(500).send(err))
}

module.exports = {
  getAllComments,
  getCommentsByMeme,
  createComment,
  updateComment,
  removeComment
};