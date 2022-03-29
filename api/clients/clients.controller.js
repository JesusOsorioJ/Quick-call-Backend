const { getAllClients, getOneClient, createClient } = require('./clients.service')
  
async function handlerAllClients(req, res) {
  res.json(await getAllClients());
}  

async function handlerOneClient(req, res) {
    const id = req.params.id;
    const client = await getOneClient(id);
  
    if (!client) {
      res.status(404).json({ message: `Client not found with id: ${id}` });
    } else {
      res.json(client);
    }
  }

  async function handlerCreateClient(req, res) {
    const newClient = req.body;
    const client = await createClient(newClient);
  
    return res.status(201).json(client);
  }
module.exports= {
  handlerAllClients, 
  handlerOneClient, handlerCreateClient
}
  