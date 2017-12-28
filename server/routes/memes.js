const express = require('express');
const router = express.Router();
const Meme = require('../controllers/memes');
const Auth = require('../helpers/auth')

router.get('/', Meme.getAllMemes)
router.get('/:userId', Meme.getByUser)
router.post('/', Auth.hasLogin, Meme.createMeme)
router.put('/:id', Auth.hasLogin, Meme.updateMeme)
router.delete('/:id', Auth.hasLogin, Meme.removeMeme)

module.exports = router;