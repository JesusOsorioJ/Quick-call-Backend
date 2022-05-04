const { socket } = require('../../config/websocket');

function eventGetAllMessages(id, messages) {
    socket.io.emit(`${id}:getAll`, messages);
}

function eventCreateMessage(id, message) {
    const ccs = socket.io.emit(`${id}:create`, message);
    console.log("csssss2", ccs)
}

function eventDeleteMessage(id, message) {
    socket.io.emit(`${id}:delete`, message);
}

function eventUpdateMessage(id, message) {
    socket.io.emit(`${id}:update`, message);
}

module.exports = {
    eventGetAllMessages,
    eventCreateMessage,
    eventDeleteMessage,
    eventUpdateMessage,
}
