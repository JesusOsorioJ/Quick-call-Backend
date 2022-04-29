const { Router } = require('express');

const { handlerPayment, handlerGetPaymentsByUserId } = require('./payments.controller');
const { isAuthenticated, isSelf } = require('../../auth/auth.service');

const router = Router();

router.get('/user/:id/payment/:paymentId', isAuthenticated(), isSelf(), handlerGetPaymentsByUserId);
router.post('/', isAuthenticated(), handlerPayment);

module.exports = router;




