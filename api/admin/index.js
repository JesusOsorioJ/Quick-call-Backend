const Router = require('express');
const router = Router();

const {
    handlerAllAdmins,
} = require('./admin.controller');

router.get('/', handlerAllAdmins);

module.exports = router;
