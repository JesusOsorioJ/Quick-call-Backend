const {Router} = require('express');
const {handlerOneTask} = require('./PQRS.controller');

const router = Router();

router.get('/',handlerOneTask);

module.exports = router;