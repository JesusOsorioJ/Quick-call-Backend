const {Router} = require('express');
const { handlerAllClientExperiences, handlerCreateClientExperiences } = require('./clientsExperience.controller');

const router = Router();

router.get('/', handlerAllClientExperiences);
router.post('/', handlerCreateClientExperiences);

module.exports = router;
