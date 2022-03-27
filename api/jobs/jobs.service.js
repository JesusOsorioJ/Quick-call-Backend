const jobsModel = require('./jobs.model');

async function getAllJobs() {
  return await jobsModel.find();
}

module.exports = { getAllJobs };
