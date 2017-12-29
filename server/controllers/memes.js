const Meme = require('../models/Memes');

const getAllMemes = (req, res) => {
  Meme.find()
  .populate('author')
  .populate('funny')
    .then(memes => res.status(200).send(memes))
    .catch(err => res.status(500).send(err))
}

const getByUser = (req, res) => {
  Meme.find({author: req.params.userId})
    .populate('author')
    .populate('funny')
    .then(memes => res.status(200).send(memes))
    .catch(err => res.status(500).send(err))
}

const createMeme = (req, res) => {
  let meme = new Meme({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    author: req.headers.userid
  })
  meme.save()
    .then(newMeme => {
      res.status(200).send({
        message: 'New Meme has been posted',
        newMeme
      })
    })
    .catch(err => res.status(500).send(err))
}

const updateMeme = (req, res) => {
  Meme.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      imageUrl: req.body.imageUrl
    }
  }, {new: true})
    .then(updating => {
      res.status(200).send({
        message: 'This Meme has been update',
        updating
      })
    })
    .catch(err => res.status(500).send(err))
}

const removeMeme = (req, res) => {
  Meme.findByIdAndRemove(req.params.id)
    .then(removed => {
      res.status(200).send({
        message: 'This Meme has been remove',
        removed
      })
    })
    .catch(err => res.status(500).send(err))
}

const funnyMeme = (req, res) => {
  Meme.findByIdAndUpdate(req.params.id, {
    $addToSet: {
      funny: req.headers.id
    }
  }, {new: true})
    .then(voted => {
      res.status(200).send({
        message: 'This has been voted',
        voted
      })
    })
    .catch(err => res.status(500).send(err))
}

const unfunnyMeme = (req, res) => {
  Meme.findByIdAndUpdate(req.params.id, {
    $pull: {
      funny: req.headers.id
    }
  }, {new: true})
    .then(unvoted => {
      res.status(200).send({
        message: 'unvoted meme',
        unvoted
      })
    })
    .catch(err => res.status(500).send(err))
}

module.exports = {
  getAllMemes,
  getByUser,
  createMeme,
  updateMeme,
  removeMeme,
  funnyMeme,
  unfunnyMeme
};