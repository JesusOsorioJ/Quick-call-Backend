const clients= require('./api/clients');
const jobs = require('./api/jobs');
const PQRS = require('./api/PQRS');
const professionals = require('./api/professionals');
const clients_experience = require('./api/clients-experience');
const authLocal = require('./auth/local');
const categories = require('./api/categories');


function routes(app){
    app.use('/api/clients', clients)
    app.use('/api/jobs', jobs)
    app.use('/api/PQRS', PQRS)
    app.use('/api/professionals', professionals)
    app.use('/api/clients-experiences', clients_experience)
    app.use('/auth/local', authLocal),
    app.use('/api/categories', categories)
}

module.exports = routes
