const {Router} = require('express');
const { handlerAllJobs, handlerCreateJob } = require('./jobs.controller');

const router = Router();

router.get('/', handlerAllJobs);
router.post('/', handlerCreateJob);

module.exports = router;
