const {
  getAllJobs,
  createJob,
  getJobById,
  getJobsByUserId,
  updateJobsById } = require('./jobs.service')
const { getClientById } = require('../clients/clients.service')
const { getProfessionalById } = require('../professionals/professionals.service');
const {
  emailJobCreatedClient,
  emailJobCreatedProfessional,
  emailJobQuoteClient,
  emailJobPaidProfessional,
  emailJobFinishedClient,
  emailJobClosedProfessional,
} = require('../../utils/sendgrid');
const { socket } = require('../../config/websocket');

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
    const idJob = job._id
    const client = await getClientById(job.client);
    const idClient = client._id
    const professional = await getProfessionalById(job.professional);
    const idProfessional = professional._id
    
    await socket.io.emit(`${idClient}:createJobs`, idJob);
    await socket.io.emit(`${idProfessional}:createJobs`, idJob);

    emailJobCreatedClient(client, job);
    emailJobCreatedProfessional(professional, job);
    return res.status(201).json(job);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

async function handlerGetJobById(req, res) {
  try {
    const id = req.params.id;
    const job = await getJobById(id);
    return res.status(200).json(job);
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

async function handlerUpdateJob(req, res) {
  const editJob = req.body;
  const {id} = req.params;

  try {
    let client, professional;
    const job = await updateJobsById(id, editJob);
    switch (job.status) {
      case 'Pendiente pago':
        client = await getClientById(job.client);
        await emailJobQuoteClient(client, job);
        break;
      case 'Finalizado':
        client = await getClientById(job.client);
        await emailJobFinishedClient(client, job);
        break;
      case 'Cerrado':
        professional = await getProfessionalById(job.professional);
        await emailJobClosedProfessional(professional, job);
        break;
      default:
        console.log('ac?? es default');
    }
    return res.status(200).json(job);
  } catch (error) {
    console.log(error.message)
    return res.status(404).json(error.message);
  }
}

module.exports= {
  handlerAllJobs,
  handlerCreateJob,
  handlerGetJobById,
  handlerGetJobsByUserId,
  handlerUpdateJob };
