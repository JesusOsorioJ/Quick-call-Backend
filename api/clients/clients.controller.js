const { getAllClients, getOneClient } = require('./clients.service')
  
async function handlerAllClients(req, res) {
  const clients = await getAllClients();
  res.json(clients);
}  

function handlerOneClient(req, res) {
    const id = req.params.id;
    console.log('xxxxxxxxxxxx')
    const client = getOneClient(id);
  
    if (!client) {
      res.status(404).json({ message: `Client not found with id: ${id}` });
    } else {
      res.json(client);
    }
  }

module.exports= {
  handlerAllClients, 
  handlerOneClient
}
  