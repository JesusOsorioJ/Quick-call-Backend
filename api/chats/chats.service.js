const chatsModel = require('./chats.model');

async function getAllChats() {
    return await chatsModel.find({});
}

async function getChat(chatId) {
    return await chatsModel.findById(chatId);
}

async function createChat(chat) {
    return await chatsModel.create(chat);
}

async function updateChat(chatId, chat) {
    return await chatsModel.findOneAndUpdate({ '_id': chatId }, chat, {
        new: true,
    });
}

async function deleteChat(chatId) {
    return await chatsModel.findByIdAndDelete(chatId);
}

module.exports = {
    getAllChats,
    getChat,
    createChat,
    updateChat,
    deleteChat,
}
