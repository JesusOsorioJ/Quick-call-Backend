const fs = require('fs');
const cloudinary = require('cloudinary').v2;

const {
  allProfessionals,
  oneProfessional,
  createProfessional,
  editProfessional,
} = require("./professionals.service");

async function handlerAllProfessionals(req, res) {
  try {
    console.log(req.query);
    const professional = await allProfessionals(req.query);
    return res.json(professional);
  } catch (error) {
    return res.json(error);
  }
}


async function handlerOneProfessional(req, res) {
  const id = req.params.id;
  try{
  const professional = await oneProfessional(id);
  return res.status(200).json(professional);
  }catch(error) {
  return  res.status(404).json({ message: `Professional not found with id: ${id}` });
  }
}


async function uploadImage(image) {
  try {
    const result = await cloudinary.uploader.upload(image);
    return result;
  } catch (error) {
    console.log(error);
  } finally{
    fs.unlinkSync(image);
  }
}

async function handlerCreateImage(req, res) {
  try {
    const { file } = req;
    const result  = await uploadImage(file.path);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}


async function handlerCreateProfessional(req, res) {
  const newProfessional = req.body;
  const profesional = await createProfessional(newProfessional);
  return res.status(201).json(profesional);
}

async function handlerEditProfessional(req, res) {
  const editedProfessional = req.body;
  const {id} = req.params

  try {
    const profesional = await editProfessional(id, editedProfessional);
    return res.status(200).json(profesional);
  } catch (error) {
    return res.status(404).json({ message: `Profesionals not found with id: ${id}` });
  }

}

module.exports = {
  handlerAllProfessionals,
  handlerOneProfessional,
  handlerCreateProfessional,
  handlerEditProfessional,
  handlerCreateImage,
};
