const {Router} = require('express');
const {handlerOneTask} = require('./jobs.controller');

const router = Router();

router.get('/',handlerOneTask);

module.exports = router;