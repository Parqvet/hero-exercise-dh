const { Router } = require('express');
const router = Router();

const { home, heroes, detallesHero } = require('../controllers/controller');

router.get('/', home);

router.get('/heroes', heroes);

router.get('/detalle/:id', detallesHero);

module.exports = router;