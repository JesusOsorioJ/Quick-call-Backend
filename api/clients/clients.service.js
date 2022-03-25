const ClientModel = require('./clients.model');

async function getAllClients() {
  return await ClientModel.find();
}

function getOneClient(id) {
    const task = tasks.find(task => task.id === Number(id));
  
    if (!task) {
      return null;
    }
  
    return task;
}

module.exports = {
  getAllClients, 
  getOneClient
}