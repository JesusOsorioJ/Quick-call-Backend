const socketio = require('socket.io');

const socket = {};

function connectSocket(server) {
    const options = {
        cors: { origin: true }
    };
    // const io = new socketio.Server(server, options);
    const io = socketio(server, options);

    socket.io = io;
}

module.exports = { socket, connectSocket }
