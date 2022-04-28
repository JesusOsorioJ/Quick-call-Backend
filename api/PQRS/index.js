const {Router} = require('express');
const { isAuthenticated, isSelf } = require('../../auth/auth.service')
const {
    handlerAllPQRS,
    handlerGetPQRById,
    handlerGetPQRByPetitioner,
    handlerCreatePQR
} = require('./PQRS.controller');

const router = Router();

router.get('/', handlerAllPQRS);
router.get('/:id', handlerGetPQRById);
router.get('/petitioner/:id', isAuthenticated(), isSelf(), handlerGetPQRByPetitioner);
router.post('/', handlerCreatePQR);

module.exports = router;
