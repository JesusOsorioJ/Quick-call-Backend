const PQRSModel = require('./PQRS.model');

async function getAllPQRS() {
  return await PQRSModel.find();
}

module.exports = { getAllPQRS };
