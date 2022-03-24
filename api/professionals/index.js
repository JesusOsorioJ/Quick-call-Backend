const {Router} = require('express');
const {handlerOneTask} = require('./professionals.controller');

const router = Router();

router.get('/',handlerOneTask);

module.exports = router;