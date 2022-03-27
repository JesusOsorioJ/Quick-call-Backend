const {Router} = require('express');
const { handlerAllJobs } = require('./jobs.controller');

const router = Router();

router.get('/', handlerAllJobs);

module.exports = router;
