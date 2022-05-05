const { Router } = require('express');

const { handlerLoginUser, handlerValidateToken } = require('./local.controller');

const router = Router();

router.post('/login', handlerLoginUser);
router.post('/validateToken', handlerValidateToken);
// /auth/local/forgot-password
// /auth/local/verify-account

module.exports = router;
