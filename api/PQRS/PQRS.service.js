const PQRSModel = require('./PQRS.model');
const mongoose = require('mongoose');

async function getAllPQRS() {
  return await PQRSModel.find();
}

async function createPQR(pqr) {
  return await PQRSModel.create(pqr);
}

async function getPQRById(id) {
  return await PQRSModel.findById(id);
}

async function getPQRByPetitioner(petitionerId) {
  const searchQuery = { petitioner: petitionerId };
  return await PQRSModel.find(searchQuery);
}

module.exports = { getAllPQRS, createPQR, getPQRById, getPQRByPetitioner };
