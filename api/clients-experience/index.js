const {Router} = require('express');
const {handlerOneTask} = require('./clientsExperience.controller');

const router = Router();

router.get('/',handlerOneTask);

module.exports = router;