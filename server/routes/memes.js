const express = require('express');
const router = express.Router();
const Meme = require('../controllers/memes');
const Auth = require('../helpers/auth');
const uploadMeme = require('../helpers/uploadMeme')

router.get('/', Meme.getAllMemes)
router.get('/:userId', Meme.getByUser)
router.post('/', Auth.hasLogin, uploadMeme.multer.single('image_url'), uploadMeme.sendImage,Meme.createMeme)
router.put('/fun/:id', Auth.hasLogin, Meme.funnyMeme)
router.put('/unfun/:id', Auth.hasLogin, Meme.unfunnyMeme)
router.put('/:id', Auth.hasLogin, Meme.updateMeme)
router.delete('/:id', Auth.hasLogin, Meme.removeMeme)

module.exports = router;