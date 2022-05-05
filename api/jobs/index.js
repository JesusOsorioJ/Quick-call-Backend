const { Router } = require('express');
const { isAuthenticated, isSelf } = require('../../auth/auth.service');
const { handlerAllJobs, handlerCreateJob, handlerGetJobById, handlerGetJobsByUserId, handlerUpdateJob} = require('./jobs.controller');

const router = Router();

router.get('/', handlerAllJobs);
router.get('/id/:id', handlerGetJobById);
router.get('/user/:id', isAuthenticated(), isSelf(), handlerGetJobsByUserId);
router.post('/', handlerCreateJob);
router.patch('/id/:id', handlerUpdateJob);

module.exports = router;
