const professionals = require('./professionals.model')

async function allProfessionals(query) {
  const h = { name: "Soldador General", isCertified: true }
  return await professionals.find({ specialties: { $elemMatch: { name: 'Soldador General', isCertified: true } } });
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
