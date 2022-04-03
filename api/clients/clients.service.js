const ClientModel = require('./clients.model');

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
  return await ClientModel.create(body);
}

async function updateClient(id, body) {
  const updatedClient = await ClientModel.findByIdAndUpdate(id, body)
  return updatedClient;
}

module.exports = {
  getAllClients,
  getOneClient,
  getClientByEmail,
  createClient,
  updateClient,
}
