const Komen = require('../controllers/comments');
const router = require('express').Router();
const Auth = require('../helpers/auth')

router.get('/', Komen.getAllComments)
router.get('/:memeId', Komen.getCommentsByMeme)
router.post('/:memeId', Auth.hasLogin, Komen.createComment)
router.put('/:id', Auth.hasLogin, Komen.updateComment)
router.delete('/:id', Auth.hasLogin, Komen.removeComment)

module.exports = router;