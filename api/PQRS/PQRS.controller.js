const { getAllPQRS, createPQR } = require('./PQRS.service')

async function handlerAllPQRS(req, res) {
  res.json(await getAllPQRS());
}

async function handlerCreatePQR(req, res) {
  const newPQR = req.body;
  const pqr = createPQR(newPQR);

  return res.status(201).json(pqr);
}

module.exports= { handlerAllPQRS, handlerCreatePQR };
