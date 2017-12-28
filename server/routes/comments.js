const Komen = require('../controllers/comments');
const router = require('express').Router();

router.get('/', Komen.getAllComments)
router.get('/:memeId', Komen.getCommentsByMeme)
router.post('/', Komen.createComment)
router.put('/:id', Komen.updateComment)
router.delete('/:id', Komen.removeComment)

module.exports = router;