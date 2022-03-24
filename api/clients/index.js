const {Router} = require('express');
const {handlerAllTask, handlerOneTask} = require('./clients.controller');

const router = Router();

router.get('/', handlerAllTask)
router.get('/:id', handlerOneTask);

module.exports = router;