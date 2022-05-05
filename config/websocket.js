const socketio = require('socket.io');
const socket = {};

function connectSocket(server) {
    const options = {
        cors: { origin: ['*', 'http://localhost:8080', 'http://localhost:3000', 'https://quickcall.netlify.app'] }
    };
    const io = new socketio.Server(server, options);

    io.on('connection', (socket) => {
        console.log('a user connected at socket: ', socket.id);

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });

    socket.io = io;
}


module.exports = { socket, connectSocket }
