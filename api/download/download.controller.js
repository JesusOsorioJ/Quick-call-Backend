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


        const stream = res.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename=Jobfile_${id}.pdf`,
        });

        buildPdfJob(
            { job, client, professional },
            (data) => { stream.write(data); },
            () => { stream.end(); }
        );

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { handlerJobPdfDownload }
