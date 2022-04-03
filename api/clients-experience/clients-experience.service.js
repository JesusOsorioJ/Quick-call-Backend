const clientExperienceModel = require('./clients-experience.model');

async function getAllClientExperiences() {
  return await clientExperienceModel.find();
}

async function createClientExperience(experience) {
  return await clientExperienceModel.create(experience);
}

module.exports = {
  getAllClientExperiences,
  createClientExperience
}
