const { Router } = require('express');
const router = Router();

const heroController = require('../controllers/heroesController');

router.get('/heroes', heroController.herores);
router.get('/heroes/detalle/:id', heroController.detallesHero);

module.exports = router;