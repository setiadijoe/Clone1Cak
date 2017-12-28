const express = require('express');
const router = express.Router();
const Meme = require('../controllers/memes');

router.get('/', Meme.getAllMemes)
router.get('/:userId', Meme.getByUser)
router.post('/', Meme.createMeme)
router.put('/:id', Meme.updateMeme)
router.delete('/:id', Meme.removeMeme)

module.exports = router;