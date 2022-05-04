const jobsModel = require('./jobs.model');

async function getAllJobs() {
  return await jobsModel.find();
}

async function createJob(job) {
  return await jobsModel.create(job);
}

async function getJobById(id) {
  return await jobsModel.findById(id).sort({ startDate: 'desc' }).exec(); // Not working
}

async function getJobsByUserId(userId, role) {
  return await jobsModel.find({ [role]: userId });
}
async function updateJobsById (id, change) {
  return await jobsModel.findByIdAndUpdate(id, change);
}

module.exports = { getAllJobs, createJob, getJobById, getJobsByUserId, updateJobsById };
