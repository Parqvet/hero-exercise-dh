const { Router } = require('express');
const router = Router();

const heroController = require('../controllers/heroesController');

router.get('/heroes', heroController.herores);
router.get('/heroes/detalle/:id', heroController.detallesHero);
router.get('/heroes/bio/:id/:ok?', heroController.heroesBio);

module.exports = router;