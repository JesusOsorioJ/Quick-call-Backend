const PQRSModel = require('./PQRS.model');

async function getAllPQRS() {
  return await PQRSModel.find();
}

async function createPQR(pqr) {
  return await PQRSModel.create(pqr);
}

async function getPQRById(id) {
  return await PQRSModel.findById(id);
}

module.exports = { getAllPQRS, createPQR, getPQRById };
