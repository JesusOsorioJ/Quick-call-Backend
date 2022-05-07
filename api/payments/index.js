const { Router } = require('express');

const { handlerPayment, handlerGetPaymentsByUserId, handlerGetPaymentById } = require('./payments.controller');
const { isAuthenticated, isSelf } = require('../../auth/auth.service');

const router = Router();

router.get('/user/:id/payment/:paymentId', isAuthenticated(), isSelf(), handlerGetPaymentsByUserId);
router.get('/:id', handlerGetPaymentById);
router.post('/', isAuthenticated(), handlerPayment);

module.exports = router;




