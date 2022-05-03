const { getAllJobs, createJob, getJobById, getJobsByUserId } = require('./jobs.service')
const { getClientById } = require('../clients/clients.service')
const { getProfessionalById } = require('../professionals/professionals.service');
const { emailJobCreatedClient, emailJobCreatedProfessional } = require('../../utils/sendgrid');

async function handlerAllJobs(req, res) {
  try {
    res.status(200).json(await getAllJobs());
  } catch (error) {
    res.status(404).json(error);
  }
}

async function handlerCreateJob(req, res) {
  try {
    const newJob = req.body;
    const job = await createJob(newJob);
    const client = await getClientById(job.client)
    const professional = await getProfessionalById(job.professional)
    emailJobCreatedClient(client); // Edit template
    emailJobCreatedProfessional(professional); // Edit template
    return res.status(201).json(job);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

async function handlerGetJobById(req, res) {
  try {
    const id = req.params.id;
    const job = await getJobById(id);
    return res.status(404).json(job);
  } catch (error) {
    return res.status(404).json(error);
  }
}

async function handlerGetJobsByUserId(req, res) {
  try {
    const userId = req.params.id;
    const role = req.user?.role;
    const jobs = await getJobsByUserId(userId, role);
    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(404).json(error);
  }
}

module.exports= { handlerAllJobs, handlerCreateJob, handlerGetJobById, handlerGetJobsByUserId };
