const { socket } = require('../../config/websocket');

function eventGetAllMessages(messages) {
    socket.io.emit(`${id}:getAll`, messages);
}

function eventCreateMessage(message) {
    socket.io.emit(`${id}:create`, message);
}

function eventDeleteMessage(message) {
    socket.io.emit(`${id}:delete`, messageId);
}

function eventUpdateMessage(message) {
    socket.io.emit(`${id}:update`, message);
}

module.exports = {
    eventGetAllMessages,
    eventCreateMessage,
    eventDeleteMessage,
    eventUpdateMessage,
}
