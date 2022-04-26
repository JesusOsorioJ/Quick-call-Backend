const clientsModel = require('./clients.model');
const {
  getAllClients,
  getClientById,
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

async function handlerOneClient(req, res) {
    const { id } = req.params;
    const client = await getClientById(id);

    if (!client) {
      res.status(404).json({ message: `Client not found with id: ${id}` });
    } else {
      res.json(client);
    }
}

async function handlerClientDashboard(req, res) {
  try {
    const userDashboard = await getClientById(req.user._id);
    res.status(200).json({...userDashboard.dashboardProfile});
  } catch (error) {
    res.status(404).json({ message: 'Information not found' });
  }
}

async function handlerCreateClient(req, res) {
  const newClient = req.body;
  try {
    const client = await createClient(newClient);
    emailClientAccountCreated(client);
    return res.status(201).json(client);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerUpdateClient(req, res) {
  const { id } = req.params;
  const update = req.body;

  try {
    const client = await updateClient(id, update);
    emailAccountUpdated(client.email);
    if(!client) {
      return res.status(404).json({ message: `Client not found with id: ${id}` });
    }
    res.json(client);

  } catch (error) {
    console.log(error);
    res.status(404).json({ message: `Client not found with id: ${id}` });
  }
}

module.exports= {
  handlerAllClients,
  handlerOneClient,
  handlerClientDashboard,
  handlerCreateClient,
  handlerUpdateClient,
}
