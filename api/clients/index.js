const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.service');
const {
    handlerAllClients,
    handlerOneClient,
    handlerCreateClient,
    handlerUpdateClient
} = require('./clients.controller');

const router = Router();

router.get('/', handlerAllClients);
router.get('/:id', handlerOneClient);
router.post('/', handlerCreateClient);
router.patch('/:id', isAuthenticated ,handlerUpdateClient);

module.exports = router;
