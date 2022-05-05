const {
  allProfessionals,
  getProfessionalById,
  createProfessional,
  updateProfessional,
} = require("./professionals.service");

const { emailProfessionalAccountCreated } = require('../../utils/sendgrid');

async function handlerAllProfessionals(req, res) {
  try {
    if (req.query.specialties) {
      const specialtyName = req.query.specialties;
      req.query.specialties = {
        $elemMatch: {
          name: specialtyName,
          isCertified: true,
        }
      };
    }
    const professional = await allProfessionals(req.query);
    return res.status(200).json(professional);
  } catch (error) {
    return res.status(400).json(error);
  }
}


async function handlergetProfessionalById(req, res) {
  const id = req.params.id;
  try{
  const professional = await getProfessionalById(id);
  return res.status(200).json(professional);
  }catch(error) {
  return  res.status(404).json({ message: `Professional not found with id: ${id}` });
  }
}

async function handlerCreateProfessional(req, res) {
  try {
    const newProfessional = req.body;
    const profesional = await createProfessional(newProfessional);
    await emailProfessionalAccountCreated(profesional);
    return res.status(201).json(profesional);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function handlerUpdateProfessional(req, res) {
  const updatedProfessional = req.body;
  const { id } = req.params

  try {
    const profesional = await updateProfessional(id, updatedProfessional);
    return res.status(200).json(profesional);
  } catch (error) {
    return res.status(404).json({ message: `Profesionals not found with id: ${id}` });
  }
}

module.exports = {
  handlerAllProfessionals,
  handlergetProfessionalById,
  handlerCreateProfessional,
  handlerUpdateProfessional,
};
