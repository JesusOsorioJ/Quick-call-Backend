const ClientModel = require('./clients.model');

async function getAllClients() {
  return await ClientModel.find();
}

async function getClientById(id) {
    return await ClientModel.findById(id);
}

async function getClientByEmail(email){
  return await ClientModel.findOne({ email });
}

async function createClient(body) {
  return await ClientModel.create(body);
}

async function updateClient(id, body) {
  const updatedClient = await ClientModel.findByIdAndUpdate(id, body, {
    new: true
  })
  return updatedClient;
}

module.exports = {
  getAllClients,
  getClientById,
  getClientByEmail,
  createClient,
  updateClient,
}
