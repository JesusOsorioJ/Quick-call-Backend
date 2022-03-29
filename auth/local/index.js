const { Router } = require('express');

const { handlerLoginClient } = require('./local.controller');

const router = Router();

// /auth/local/login
router.post('/login', handlerLoginClient);
// /auth/local/forgot-password
// /auth/local/verify-account

module.exports = router;
