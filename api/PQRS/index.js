const {Router} = require('express');
const { hasRole, isSelf } = require('../../auth/auth.service')
const {
    handlerAllPQRS,
    handlerGetPQRById,
    handlerGetPQRByPetitioner,
    handlerCreatePQR
} = require('./PQRS.controller');

const router = Router();

router.get('/', handlerAllPQRS);
router.get('/:id', handlerGetPQRById);
router.get('/petitioner/:id', hasRole(['client']), isSelf(), handlerGetPQRByPetitioner);
router.post('/', handlerCreatePQR);

module.exports = router;
