const Router = require('express');
const { hasRole } = require('../../auth/auth.service');
const {
    handlerAllClients,
    handlerOneClient,
    handlerCreateClient,
    handlerUpdateClient
} = require('./clients.controller');

const router = Router();

router.get('/', handlerAllClients); // hasRole('admin')
router.get('/:id', handlerOneClient); // hasRole('admin', 'client)
router.post('/', handlerCreateClient);
router.patch('/:id', hasRole(['admin', 'client']), handlerUpdateClient); // hasRole(['admin', 'client'])

module.exports = router;
