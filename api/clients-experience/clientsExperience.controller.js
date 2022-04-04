const { getAllClientExperiences, createClientExperience } = require('./clients-experience.service');

async function handlerAllClientExperiences(req, res) {
  res.json(await getAllClientExperiences());
}

async function handlerCreateClientExperiences(req, res) {
  const experience = req.body;
  try {
    const newExperience = await createClientExperience(experience);
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(500).json(error);
  }

}

module.exports= {
  handlerAllClientExperiences,
  handlerCreateClientExperiences
}
