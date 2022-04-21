const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>/<commentId>

router.route('/:pizzaId/:commentId')
.put(addReply)
.delete(removeComment)

// create a delete route to handle removeReply
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;