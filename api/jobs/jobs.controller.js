const { getAllJobs, createJob, getJobById } = require('./jobs.service')

async function handlerAllJobs(req, res) {
  res.json(await getAllJobs());
}

async function handlerCreateJob(req, res) {
  const newJob = req.body;
  const job = createJob(newJob);

  return res.status(201).json(job);
}

async function handlerGetJobById(req, res) {
  const id = req.params.id;
  const job = await getJobById(id);
  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }
  return res.json(job);
}

module.exports= { handlerAllJobs, handlerCreateJob, handlerGetJobById };
