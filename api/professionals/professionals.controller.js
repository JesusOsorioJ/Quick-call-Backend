const { AllProfessionals,
  OneProfessional,
  CreateProfessional,
  EditProfessional,
  TypeProfessional
} = require("./professionals.service");

async function handlerAllProfessionals(req, res) {
  const professional = await AllProfessionals();
  return res.json(professional);
}

async function handlerOneProfessional(req, res) {
  const id = req.params.id;
  try{
  const professional = await OneProfessional(id);
  return res.status(200).json(professional);
  }catch(error) {
  return  res.status(404).json({ message: `Professional not found with id: ${id}` });
  }
}

async function handlerCreateProfessional(req, res) {
  const newProfessional = req.body;
  const profesional = await CreateProfessional(newProfessional);
  return res.status(201).json(profesional);
}

async function handlerEditProfessional(req, res) {
  const EditeProfessional = req.body;
  const {id} = req.params
  
  try {
    const profesional = await EditProfessional(id, EditeProfessional);
    return res.status(201).json(profesional);
  } catch (error) {
    return res.status(404).json({ message: `Profesionals not found with id: ${id}` });
  }

 }

async function handlerTypeProfessional(req, res) {
  const {filter ,type, subtype} = req.query;
  try{
    const professional = await TypeProfessional (filter, type, subtype);
    res.status(200).json(professional);
  } catch(error) {
    res.status(404).json({ message: `Professional not found with this ${filter}` });
  }
}

module.exports = {
  handlerAllProfessionals,
  handlerOneProfessional,
  handlerCreateProfessional,
  handlerEditProfessional,
  handlerTypeProfessional,
};
