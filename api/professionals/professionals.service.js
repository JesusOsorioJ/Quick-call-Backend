const professionals = require('./professionals.model')

async function allProfessionals(query) {
  return await professionals.find(query);
}

async function getProfessionalById(id){
  const professional = await professionals.findById(id);
  return professional;
}

async function getProfessionalByEmail(email){
  return await professionals.findOne({email});
}

async function createProfessional (body) {
  return await professionals.create(body);
}

async function updateProfessional (id, change) {
  return await professionals.findByIdAndUpdate(id, change, { new: true });
}

module.exports={
  allProfessionals,
  getProfessionalById,
  getProfessionalByEmail,
  createProfessional,
  updateProfessional,
}
