const {Router} = require('express');
const { handlerAllPQRS, handlerCreatePQR } = require('./PQRS.controller');

const router = Router();

router.get('/', handlerAllPQRS);
router.post('/', handlerCreatePQR);

module.exports = router;
