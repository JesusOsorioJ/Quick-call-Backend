const PQRSModel = require('./PQRS.model');

async function getAllPQRS() {
  return await PQRSModel.find();
}

async function createPQR(pqr) {
  return await PQRSModel.create(pqr);
}

module.exports = { getAllPQRS, createPQR };
