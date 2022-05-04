const PDFDocument = require('pdfkit');
const fs = require('fs');

function buildPdfJob(data, streamCallback, endCallback) {
    const doc = new PDFDocument({ font: 'Courier' });
    const { job, client, professional } = data;
    doc.on('data', streamCallback);
    doc.on('end', endCallback);

    doc.image('./utils/logo/quick-call-logo.png', 156, 10, { align: 'center', width: 300 });
    doc.moveDown(9);

    doc.fontSize(25).text(`Contrato de trabajo`, { align: 'center' });
    doc.moveDown();

    doc.font('Courier-Bold')
    doc.fontSize(12);
    doc.text(`Objetivo del trabajo: ${job.title}`);
    doc.moveDown(0.2);
    doc.text(`Estado: ${job.status}`);
    doc.moveDown(0.2);
    doc.text(`Costo: ${job.amount} COP`);
    doc.moveDown(2);

    doc.text('Datos del cliente');
    doc.moveDown();

    doc.font('Courier')
    doc.text(`Nombre: ${client.name}`);
    doc.moveDown(0.2);
    if (client.phoneNumber) { doc.text(`Número de contacto: ${client.phoneNumber}`); doc.moveDown(0.2); }
    doc.text(`Condiciones:`);
    doc.moveDown(0.5);
    if (job.conditionsClients.length > 0) {
        const conditionsClientsName = job.conditionsClients.map(condition => condition.name);
        doc.list(conditionsClientsName, { bulletRadius: 1, indent: 20 });
    } else { doc.text('No hay condiciones del cliente'); }
    doc.moveDown(2);

    doc.font('Courier-Bold')
    doc.text('Datos del profesional');
    doc.moveDown();

    doc.font('Courier')
    doc.text(`Nombre: ${professional.name}`);
    doc.moveDown(0.2);
    if (professional.phoneNumber) { doc.text(`Número de contacto: ${professional.phoneNumber}`); doc.moveDown(0.2); }
    doc.text(`Condiciones:`);
    doc.moveDown(0.5);
    if (job.conditionsProfessionals.length > 0) {
        const conditionsProfessionalsName = job.conditionsProfessionals.map(condition => condition.name);
        doc.list(conditionsProfessionalsName, { bulletRadius: 1, indent: 20  })
    } else { doc.text('No hay condiciones del profesional'); }

    doc.text(`Documento generado el día: ${new Date().toLocaleDateString()}`, doc.x, 700, { align: 'center' });
    doc.end();
}

module.exports = { buildPdfJob };
