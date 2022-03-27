const { getAllPQRS } = require('./PQRS.service')

async function handlerAllPQRS(req, res) {
  res.json(await getAllPQRS());
}

module.exports= { handlerAllPQRS };
