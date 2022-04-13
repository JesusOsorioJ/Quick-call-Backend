const professionals = require('./professionals.model')

async function AllProfessionals(query) {
  console.log(query);
  return await professionals.find(query)
}

async function OneProfessional(id){
  const professional = await professionals.findById(id);
  return professional;
}

async function CreateProfessional (body) {
  return await professionals.create(body);
}

async function EditProfessional (id, change) {
  return await professionals.findByIdAndUpdate(id, change);
}

module.exports={
  AllProfessionals,
  OneProfessional,
  CreateProfessional,
  EditProfessional,
}
