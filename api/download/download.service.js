const PDFDocument = require('pdfkit');
const fs = require('fs');

function buildPdfJob(id, job, client, professional, response) {
    const doc = new PDFDocument();
    const filePath =  `./temp/${id}.pdf`;
    const writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);
    doc.fontSize(25).text('Job #' + id);
    doc.end()
    writeStream.on('finish', function () {
        console.log('terminó FS');
        response.download(filePath);
    })
}

module.exports = { buildPdfJob };
