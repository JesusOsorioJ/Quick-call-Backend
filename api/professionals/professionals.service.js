const professionals = require('./professionals.model')

async function allProfessionals(query) {
  console.log(query);
  console.log(await professionals.find(query).count());
  return await professionals.find(query);
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
