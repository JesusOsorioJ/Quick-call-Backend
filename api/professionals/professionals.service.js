const professionals = require('./professionals.model')

async function allProfessionals(query) {
  console.log('typeof query: ',typeof query);
  console.log('query: ', query);
  return await professionals.find(query)
}

async function oneProfessional(id){
  const professional = await professionals.findById(id);
  return professional;
}

async function createProfessional (body) {
  return await professionals.create(body);
}

async function editProfessional (id, change) {
  return await professionals.findByIdAndUpdate(id, change);
}

module.exports={
  allProfessionals,
  oneProfessional,
  createProfessional,
  editProfessional,
}
