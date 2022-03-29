const clientsModel = require('./clients.model');
const ClientModel = require('./clients.model');

async function getAllClients() {
  return await ClientModel.find();
}

async function getOneClient(id) {
    return await ClientModel.findById(id);
}

async function getUserByEmail(email){
  return await ClientModel.findOne({ email });
}

async function createClient (body) {
  try {
    return await ClientModel.create(body);
  } catch (error) {
    console.log(error)
  }
  
}

module.exports = {
  getAllClients, 
  getOneClient, createClient
}