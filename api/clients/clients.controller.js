const clientsModel = require('./clients.model');
const {
  getAllClients,
  getClientById,
  getClientByEmail,
  createClient,
  updateClient
} = require('./clients.service');

const {
  emailClientAccountCreated,
  emailAccountUpdated,
} = require('../../utils/sendgrid');

async function handlerAllClients(req, res) {
  res.json(await getAllClients());
}

async function handlerClientById(req, res) {
  try {
    const { id } = req.params;
    const client = await getClientById(id);
    return res.status(200).json(client);
  } catch (error) {
    return res.status(404).json({ message: `Client not found with id: ${id}` });
  }
}

async function handlerClientByEmail(req, res) {
  try {
    const client = await getClientByEmail(req.user.email);
    return res.status(200).json(client);
  } catch (error) {
    return res.status(404).json({ message: 'Information not found' });
  }
}

async function handlerCreateClient(req, res) {
  const newClient = req.body;
  try {
    const client = await createClient(newClient);
    emailClientAccountCreated(client);
    return res.status(201).json(client);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function handlerUpdateClient(req, res) {
  const { id } = req.params;
  const update = req.body;

  try {
    const client = await updateClient(id, update);
    emailAccountUpdated(client.email);
    return res.status(200).json(client);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: `Client not found with id: ${id}` });
  }
}

module.exports= {
  handlerAllClients,
  handlerClientById,
  handlerClientByEmail,
  handlerCreateClient,
  handlerUpdateClient,
}
