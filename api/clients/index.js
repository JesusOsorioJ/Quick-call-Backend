const Router = require('express');
const { handlerAllClients, handlerOneClient, handlerCreateClient } = require('./clients.controller');

const router = Router();

router.get('/', handlerAllClients);
router.get('/:id', handlerOneClient);
router.post('/', handlerCreateClient);

module.exports = router;