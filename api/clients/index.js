const Router = require('express');
const { handlerAllClients, handlerOneClient } = require('./clients.controller');

const router = Router();

router.get('/', handlerAllClients)
router.get('/:id', handlerOneClient);

module.exports = router;