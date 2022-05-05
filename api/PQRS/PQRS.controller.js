const { getAllPQRS, createPQR, getPQRById, getPQRByPetitioner } = require('./PQRS.service')

async function handlerAllPQRS(req, res) {
  res.json(await getAllPQRS());
}

async function handlerCreatePQR(req, res) {
  try {
    const newPQR = req.body;
    const pqr = createPQR(newPQR);
    return res.status(201).json(pqr);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function handlerGetPQRByPetitioner(req, res) {
  try {
    const PQR = await getPQRByPetitioner(req.params.id);
    return res.status(200).json(PQR);
  } catch (error) {
    return res.status(500).json({ message: 'Error getting PQR' });
  }
}

async function handlerGetPQRById(req, res) {
  const id = req.params.id;
  const pqr = await getPQRById(id);
  if (!pqr) {
    return res.status(404).json({ message: 'PQR not found' });
  }
  return res.json(pqr);
}

module.exports= { handlerAllPQRS, handlerGetPQRById, handlerGetPQRByPetitioner, handlerCreatePQR };
