const { Router } = require('express');
const router = Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/creditos', mainController.creditos);

module.exports = router;