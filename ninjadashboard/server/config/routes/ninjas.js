const router = require('express').Router();
const ninjaController = require('../../controllers/ninjas');
const userLoggedIn = require('../../middleware/userLoggedIn');

router.use(userLoggedIn);
router.get('/', ninjaController.index);
router.post('/', ninjaController.create);
router.get('/:id', ninjaController.show);
router.put('/:id', ninjaController.update);
router.delete('/:id', ninjaController.delete);

module.exports = router;
