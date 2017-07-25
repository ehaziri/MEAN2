const router = require('express').Router();
const messageController = require('../../controllers/messages');

router.get('/', messageController.index);
router.post('/', messageController.create);
// router.put('/:id', messageController.update);

module.exports = router;

