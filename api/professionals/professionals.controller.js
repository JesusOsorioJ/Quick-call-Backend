const { AllProfessionals,
  OneProfessional,
  CreateProfessional,
  EditProfessional,
  TypeProfessional
} = require("./professionals.service");

async function handlerAllProfessionals(req, res) {
  const professional = await AllProfessionals();
  res.json(professional);
}

async function handlerOneProfessional(req, res) {
  const id = req.params.id;
  const professional = await OneProfessional(id);
  if (!professional) {
    res.status(404).json({ message: `Professional not found with id: ${id}` });
  } else {
    res.json(professional);
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
  const profesional = await EditProfessional(id, EditeProfessional);

  return res.status(201).json(profesional);
}

async function handlerTypeProfessional(req, res) {
  const {filter ,type, subtype} = req.params;
  console.log(filter ,type, subtype)
  const professional = await TypeProfessional (filter, type, subtype);
  if (!professional) {
    res.status(404).json({ message: `Professional not found with this ${filter}` });
  } else {
    res.json(professional);
  }
}

module.exports = {
  handlerAllProfessionals,
  handlerOneProfessional,
  handlerCreateProfessional,
  handlerEditProfessional,
  handlerTypeProfessional,
};
