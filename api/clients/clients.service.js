const clientsModel = require('./clients.model');
const ClientModel = require('./clients.model');

async function getAllClients() {
  return await ClientModel.find();
}

async function getOneClient(id) {
    return await ClientModel.findById(id);
}

module.exports = {
  getAllClients, 
  getOneClient
}