const PQRSModel = require('./PQRS.model');
const mongoose = require('mongoose');

async function getAllPQRS() {
  return await PQRSModel.find();
}

async function createPQR(pqr) {
  try {
    return await PQRSModel.create(pqr);
  } catch (error) {
    return new Error(error);
  }
}

async function getPQRById(id) {
  return await PQRSModel.findById(id);
}

async function getPQRByPetitioner(petitionerId) {
  try {
    const searchQuery = { petitioner: petitionerId };
    return await PQRSModel.find(searchQuery);
  } catch (error) {
    return new Error('Error getting PQR');
  }
}

module.exports = { getAllPQRS, createPQR, getPQRById, getPQRByPetitioner };
