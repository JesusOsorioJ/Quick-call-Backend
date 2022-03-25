const clientExperienceModel = require('./clients-experience.model');

async function getAllClientExperiences() {
  return await clientExperienceModel.find();
}

function getOneTask(id) {
    const task = tasks.find(task => task.id === Number(id));
  
    if (!task) {
      return null;
    }
  
    return task;
}

module.exports = {
  getAllClientExperiences,
  getOneTask
}