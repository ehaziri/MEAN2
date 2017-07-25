const router = require('express').Router();
const beltController = require('../../controllers/belts');

router.get('/', beltController.index);
router.post('/', beltController.create);
router.put('/:id', beltController.update);

module.exports = router;

