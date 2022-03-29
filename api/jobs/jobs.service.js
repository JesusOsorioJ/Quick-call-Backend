const jobsModel = require('./jobs.model');

async function getAllJobs() {
  return await jobsModel.find();
}

async function createJob(job) {
  return await jobsModel.create(job);
}


module.exports = { getAllJobs, createJob };
