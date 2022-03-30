const Router = require('express');
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
router.patch('/:id', handlerUpdateClient);

module.exports = router;
