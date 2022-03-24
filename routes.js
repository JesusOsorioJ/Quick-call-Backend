const clients= require('./api/clients');
const jobs = require('./api/jobs');
const PQRS = require('./api/PQRS');
const professionals = require('./api/professionals');

function routes(app){
    app.use('/api/clients',clients)
    app.use('/api/jobs',jobs)
    app.use('/api/PQRS',PQRS)
    app.use('/api/professionals',professionals)
}

module.exports = routes