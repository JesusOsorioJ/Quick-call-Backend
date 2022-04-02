const { getAllPQRS, createPQR, getPQRById } = require('./PQRS.service')

async function handlerAllPQRS(req, res) {
  res.json(await getAllPQRS());
}

async function handlerCreatePQR(req, res) {
  const newPQR = req.body;
  const pqr = createPQR(newPQR);

  return res.status(201).json(pqr);
}

async function handlerGetPQRById(req, res) {
  const id = req.params.id;
  const pqr = await getPQRById(id);
  if (!pqr) {
    return res.status(404).json({ message: 'PQR not found' });
  }
  return res.json(pqr);
}

module.exports= { handlerAllPQRS, handlerGetPQRById, handlerCreatePQR };
