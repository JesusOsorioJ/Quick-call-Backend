const { Router } = require('express');
const { isAuthenticated, isSelf } = require('../../auth/auth.service');
const { handlerAllJobs, handlerCreateJob, handlerGetJobById, handlerGetJobsByUserId } = require('./jobs.controller');

const router = Router();

router.get('/', handlerAllJobs);
router.get('/:id', handlerGetJobById);
router.get('/user/:id', isAuthenticated(), isSelf(), handlerGetJobsByUserId);
router.post('/', handlerCreateJob);

module.exports = router;
