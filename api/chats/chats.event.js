const { socket } = require('../../config/websocket');

function eventGetAllMessages(id, messages) {
    socket.io.emit(`${id}:getAll`, messages);
}

function eventCreateMessage(id, message) {
    socket.io.emit(`chat:create`, message);
}

function eventDeleteMessage(id, message) {
    socket.io.emit(`chat:delete`, message);
}

function eventUpdateMessage(id, message) {
    socket.io.emit(`chat:update`, message);
}

module.exports = {
    eventGetAllMessages,
    eventCreateMessage,
    eventDeleteMessage,
    eventUpdateMessage,
}
