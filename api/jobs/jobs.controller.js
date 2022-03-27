const { getAllJobs } = require('./jobs.service')

async function handlerAllJobs(req, res) {
  res.json(await getAllJobs());
}

module.exports= { handlerAllJobs };
