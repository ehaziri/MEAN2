const router = require('express').Router();
const postController = require('../../controllers/posts');


router.post('/', postController.create);
// router.get('/', postcController.index);
// router.get('/:id', postController.show);



module.exports = router;