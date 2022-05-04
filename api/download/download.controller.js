const { buildPdfJob } = require('./download.service');
const { getJobById } = require('../jobs/jobs.service');
const { getClientById } = require('../clients/clients.service');
const { getProfessionalById } = require('../professionals/professionals.service');

async function handlerJobPdfDownload(req, res) {
    try {
        const { id } = req.params;
        const job = await getJobById(id);
        const client = await getClientById(job.client);
        const professional = await getProfessionalById(job.professional);

        return buildPdfJob(id, job, client, professional, res);

        console.log('prueba')
        res.download(`./temp/${id}.pdf`, (err) => { if (err) { console.log(err); } });

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { handlerJobPdfDownload }
