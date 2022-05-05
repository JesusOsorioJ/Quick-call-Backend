const Router = require('express');
const { hasRole, isSelf } = require('../../auth/auth.service');
const {
    handlerAllClients,
    handlerClientById,
    handlerClientByEmail,
    handlerCreateClient,
    handlerUpdateClient
} = require('./clients.controller');

const router = Router();

router.get('/', handlerAllClients);
router.get('/:id', hasRole(['admin', 'client']), handlerClientById);
router.post('/', handlerCreateClient);
router.patch('/:id', hasRole(['admin', 'client']), isSelf(), handlerUpdateClient);

module.exports = router;
