const { Router } = require('express');
const router = Router();

const {
    handlerAllChats,
    handlerGetChatById,
    handlerCreateChat,
    handlerUpdateChat,
    handlerDeleteChat,
} = require('./chats.controller');

router.get('/', handlerAllChats);
router.get('/:id', handlerGetChatById);
router.post('/', handlerCreateChat);
router.patch('/:id', handlerUpdateChat);
router.delete('/:id', handlerDeleteChat);

module.exports = router;
