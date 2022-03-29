const res = require('express/lib/response');
const clientsModel = require('./clients.model');
const ClientModel = require('./clients.model');
const mongoose = require('mongoose');

async function getAllClients() {
  return await ClientModel.find();
}

async function getOneClient(id) {
    return await ClientModel.findById(id);
}

async function getClientByEmail(email){
  return await ClientModel.findOne({ email });
}

async function createClient(body) {
  const newClient = new ClientModel(body);
  try {
    return clientsModel.insertMany(newClient);
  } catch (error) {
    console.log("catch create", error);
  }

}

async function updateClient(id, body) {
  try {
    const updatedClient = await ClientModel.findByIdAndUpdate(id, body)
    return updatedClient;
  } catch (error) {
    console.log("catch update", error);
  }
}

module.exports = {
  getAllClients,
  getOneClient,
  getClientByEmail,
  createClient,
  updateClient,
}
