const {Router} = require('express');
const { handlerAllPQRS } = require('./PQRS.controller');

const router = Router();

router.get('/', handlerAllPQRS);

module.exports = router;
