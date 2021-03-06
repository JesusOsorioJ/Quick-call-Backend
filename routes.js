const clients= require('./api/clients');
const professionals = require('./api/professionals');
const admins = require('./api/admin');
const clients_experience = require('./api/clients-experience');
const authLocal = require('./auth/local');
const jobs = require('./api/jobs');
const PQRS = require('./api/PQRS');
const categories = require('./api/categories');
const payments = require('./api/payments');
const upload = require('./api/upload');
const chats = require('./api/chats');
const download = require('./api/download');


function routes(app){
    app.use('/api/clients', clients)
    app.use('/api/professionals', professionals)
    app.use('/api/admin', admins)
    app.use('/api/clients-experiences', clients_experience)
    app.use('/auth/local', authLocal),
    app.use('/api/jobs', jobs)
    app.use('/api/PQRS', PQRS)
    app.use('/api/categories', categories)
    app.use('/api/payments', payments)
    app.use('/api/upload', upload)
    app.use('/api/chats', chats)
    app.use('/api/download', download)
}

module.exports = routes
