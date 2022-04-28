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

async function getJobsByUserId(userId, role) {
  return await jobsModel.find({ [role]: userId });
}

module.exports = { getAllJobs, createJob, getJobById, getJobsByUserId };
