const {Router} = require('express');
const { handlerAllJobs, handlerCreateJob, handlerGetJobById } = require('./jobs.controller');

const router = Router();

router.get('/', handlerAllJobs);
router.get('/:id', handlerGetJobById);
router.post('/', handlerCreateJob);

module.exports = router;
