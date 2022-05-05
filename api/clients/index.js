const Router = require('express');
const { hasRole, isSelf } = require('../../auth/auth.service');
const {
    handlerAllClients,
    handlerClientById,
    handlerCreateClient,
    handlerUpdateClient
} = require('./clients.controller');

const router = Router();

router.get('/', handlerAllClients);
router.get('/:id', handlerClientById);
router.post('/', handlerCreateClient);
router.patch('/:id', hasRole(['admin', 'client']), isSelf(), handlerUpdateClient);

module.exports = router;
