<<<<<<< HEAD
const {
  allProfessionals,
  oneProfessional,
  createProfessional,
  editProfessional,
=======
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

const { AllProfessionals,
  OneProfessional,
  CreateProfessional,
  EditProfessional,
>>>>>>> 97085d4efe3e110dc529262986fced6ea594ed35
} = require("./professionals.service");

async function handlerAllProfessionals(req, res) {
  const professional = await allProfessionals(req.query);
  return res.json(professional);
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

async function handlerOneProfessional(req, res) {
  const id = req.params.id;
  try{
  const professional = await oneProfessional(id);
  return res.status(200).json(professional);
  }catch(error) {
  return  res.status(404).json({ message: `Professional not found with id: ${id}` });
  }
}

async function handlerCreateProfessional(req, res) {
<<<<<<< HEAD
  const newProfessional = req.body;
  const profesional = await createProfessional(newProfessional);
  return res.status(201).json(profesional);
=======

  const  data  = req.body;
  console.log("xxxxxxxxxxxxxxxxxxxxx filles", data)

  // for (let step = 0; step < specialty.length ; step++) {
  //   past = specialty[step]
  //   image = req[past];
  //   if (image) {
  //     await uploadImage(image.path);
  //   }
  // }

  // specialty.map((special) => (
  //   image = req[special];
  //   if (image) {
  //     await uploadImage(image.path);
  //   }

  //   ));

  // const newProfessional = req.body;
  // const profesional = await CreateProfessional(newProfessional);
  // return res.status(201).json(profesional);
>>>>>>> 97085d4efe3e110dc529262986fced6ea594ed35
}

async function handlerEditProfessional(req, res) {
  const EditeProfessional = req.body;
  const {id} = req.params

  try {
    const profesional = await editProfessional(id, EditeProfessional);
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
};
