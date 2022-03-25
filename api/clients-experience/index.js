const {Router} = require('express');
const { handlerAllClientExperiences } = require('./clientsExperience.controller');

const router = Router();

router.get('/', handlerAllClientExperiences);

module.exports = router;