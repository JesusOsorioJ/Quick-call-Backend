const {
    getAllChats,
    getChat,
    createChat,
    updateChat,
    deleteChat,
} = require('./chats.service');

const {
    eventGetAllMessages,
    eventCreateMessage,
    eventDeleteMessage,
    eventUpdateMessage,
} = require('./chats.event');

async function handlerAllChats(req, res) {
    try {
        const chats = await getAllChats();
        return res.status(200).json(chats);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function handlerGetChatById(req, res) {
    try {
        const chatId = req.params.chatId;
        const chat = await getChat(chatId);
        return res.status(200).json(chat);
    } catch (error) {
        return res.status(404).json(error);
    }
}

async function handlerCreateChat(req, res) {
    try {
        const chat = req.body;
        const newChat = await createChat(chat);
        return res.status(201).json(newChat);
    } catch (error) {
        return res.status(400).json(error);
    }
}

async function handlerUpdateChat(req, res) {
    try {
        const update = req.body;
        const chatId = req.params.id;
        const updatedChat = await updateChat(chatId, update);
        return res.status(200).json(updatedChat);
    } catch (error) {
        return res.status(404).json(error);
    }
}

async function handlerDeleteChat(req, res) {
    try {
        const chatId = req.params.id;
        await deleteChat(chatId);
        return res.status(204).json();
    } catch (error) {
        return res.status(404).json(error);
    }
}

module.exports = {
    handlerAllChats,
    handlerGetChatById,
    handlerCreateChat,
    handlerUpdateChat,
    handlerDeleteChat,
}
