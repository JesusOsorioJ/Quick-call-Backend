const jobsModel = require('./jobs.model');

async function getAllJobs() {
  return await jobsModel.find();
}

async function createJob(job) {
  return await jobsModel.create(job);
}

async function getJobById(id) {
  return await jobsModel.findById(id);
}


module.exports = { getAllJobs, createJob, getJobById };
