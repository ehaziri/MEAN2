const router = require('express').Router();
const categoryController = require('../../controllers/categories');


router.get('/', categoryController.index);

module.exports = router;