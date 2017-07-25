const router = require('express').Router();
const topicController = require('../../controllers/topics');


router.post('/', topicController.create);
router.get('/', topicController.index);
router.get('/:id', topicController.show);



module.exports = router;