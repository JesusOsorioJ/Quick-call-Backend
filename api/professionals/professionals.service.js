const professionals = require('./professionals.model') 

async function AllProfessionals (){
  return await professionals.find()
}

async function OneProfessional(id){
  const professional = await professionals.findById(id)
  if (!professional) {
    return null;
  }

  return professional;
}

async function CreateProfessional (body) {
  return await professionals.create(body);
}

async function EditProfessional (id, change) {
  return await professionals.findByIdAndUpdate(id, change);
}

async function TypeProfessional (filter, type, subtype) {
  if (!subtype){
    return await professionals.find({[filter]:type});
  }
    const filters = (filter+"."+type);
    return await professionals.find({[filters]:subtype});
}

module.exports={ 
  AllProfessionals,
  OneProfessional,
  CreateProfessional,
  EditProfessional,
  TypeProfessional
}