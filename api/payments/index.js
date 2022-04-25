const { Router } = require('express');

const { handlerPayment } = require('./payments.controller');
const { isAuthenticated } = require('../../auth/auth.service');

const router = Router();

router.post('/', isAuthenticated(), handlerPayment);

module.exports = router;




