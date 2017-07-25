const router = require('express').Router();
const commentController = require('../../controllers/comments');

router.get('/', commentController.index);
router.post('/', commentController.create);
// router.put('/:id', commentController.update);

module.exports = router;

