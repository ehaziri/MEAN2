const router = require('express').Router();
const pollController = require('../../controllers/polls');
const userLoggedIn = require('../../middleware/userLoggedIn');

// router.use(userLoggedIn);
router.get('/', pollController.index);
router.post('/', pollController.create);
// router.get('/:id', ninjaController.show);
router.put('/:id', pollController.update);
router.delete('/:id', pollController.delete);

module.exports = router;
