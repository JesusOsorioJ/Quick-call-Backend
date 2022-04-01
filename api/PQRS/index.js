const {Router} = require('express');
const { handlerAllPQRS, handlerGetPQRById ,handlerCreatePQR } = require('./PQRS.controller');

const router = Router();

router.get('/', handlerAllPQRS);
router.get('/:id', handlerGetPQRById);
router.post('/', handlerCreatePQR);

module.exports = router;
