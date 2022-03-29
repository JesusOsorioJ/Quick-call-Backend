const { getAllClients, getOneClient, createClient, updateClient } = require('./clients.service')

async function handlerAllClients(req, res) {
  res.json(await getAllClients());
}

async function handlerOneClient(req, res) {
    const { id } = req.params;
    const client = await getOneClient(id);

    if (!client) {
      res.status(404).json({ message: `Client not found with id: ${id}` });
    } else {
      res.json(client);
    }
  }

async function handlerCreateClient(req, res) {
  const newClient = req.body;

  try {
    const client = await createClient(newClient);
    return res.status(201).json(client);

  } catch (error) {
    console.log(error);
  }
}

async function handlerUpdateClient(req, res) {
  const { id } = req.params;
  const update = req.body;

  try {
    const client = await updateClient(id, update);
    console.log(client);
    res.json(client);

  } catch (error) {
    res.status(404).json({ message: `Client not found with id: ${id}` });
  }
}

module.exports= {
  handlerAllClients,
  handlerOneClient,
  handlerCreateClient,
  handlerUpdateClient,
}
