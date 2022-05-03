require('dotenv').config();
const express = require('express');
const http = require('http');
const connectDB = require('./config/database');
const configExpress = require('./config/express');
const routes = require('./routes');
const { connectSocket } = require('./config/websocket');

const app = express();
// const server = http.Server(app);

connectDB();
configExpress(app);
// connectSocket(server)
routes(app);

// module.exports = { app, server };
module.exports = { app };
