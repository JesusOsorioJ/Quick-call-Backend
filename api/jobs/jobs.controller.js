const { getAllJobs, createJob } = require('./jobs.service')

async function handlerAllJobs(req, res) {
  res.json(await getAllJobs());
}

async function handlerCreateJob(req, res) {
  const newJob = req.body;
  const professional = createJob(newJob);

  return res.status(201).json(professional);
}


module.exports= { handlerAllJobs, handlerCreateJob };
