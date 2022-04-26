const Router = require('express');
const { hasRole } = require('../../auth/auth.service');
const {
    handlerAllClients,
    handlerOneClient,
    handlerClientDashboard,
    handlerCreateClient,
    handlerUpdateClient
} = require('./clients.controller');

const router = Router();

router.get('/', handlerAllClients); // hasRole('admin')
router.get('/:id', hasRole(['admin', 'client']), handlerOneClient);
router.get('/dashboard/profile', hasRole(['client']), handlerClientDashboard);
router.post('/', handlerCreateClient);
router.patch('/:id', hasRole(['admin', 'client']), handlerUpdateClient);

module.exports = router;
