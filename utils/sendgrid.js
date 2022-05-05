const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const baseNoReply = '"no-reply.quickcall@qc.com" <rideluis@gmail.com>';

// Pending correo de creación de cuenta para el profesional

function emailClientAccountCreated(information) {
  const { email, name } = information;
  const msg = {
    to: email,
    from: baseNoReply,
    dynamic_template_data: {
      name: name.split(' ')[0],
    },
    template_id: 'd-0cf7b9d1377143a39d4d7ac86fed236d'
  }

  sgMail.send(msg)
    .then(() => {
      console.log('🚀 ~ file: sendgrid.js ~ line 32 ~ emailClientAccountCreated ~ email sent');
    })
    .catch((error) => {
      console.log('🚀 ~ file: sendgrid.js ~ line 36 ~ emailClientAccountCreated ~ error', error);
    });
}

function emailProfessionalAccountCreated(information) {
  const { email, name } = information;
  const msg = {
    to: email,
    from: baseNoReply,
    dynamic_template_data: {
      name: name.split(' ')[0],
    },
    template_id: 'd-49d02c6de67847ff96a2f11bff57beaf'
  }

  sgMail.send(msg)
    .then(() => {
      console.log('🚀 ~ file: sendgrid.js ~ line 32 ~ emailProfessionalAccountCreated ~ email sent');
    })
    .catch((error) => {
      console.log('🚀 ~ file: sendgrid.js ~ line 36 ~ emailProfessionalAccountCreated ~ error', error);
    });
}

function emailAccountUpdated(email) {
  const currentDateTime = new Date();
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const date = `${currentDateTime.getDate()} de ${months[currentDateTime.getMonth()]} de ${currentDateTime.getFullYear()}`;
  const hour = `${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`;

  const msg = {
    to: email,
    from: baseNoReply,
    dynamic_template_data: {
      date: date,
      hour: hour,
    },
    template_id: 'd-2b5c9a6d06504e03bc5e9dde3505a79b'
  }

  sgMail.send(msg)
    .then(() => {
      console.log('🚀 ~ file: sendgrid.js ~ line 32 ~ emailAccountUpdated ~ email sent');
    })
    .catch((error) => {
      console.log('🚀 ~ file: sendgrid.js ~ line 36 ~ emailAccountUpdated ~ error', error);
    });
}

function emailPQRCreated(data) {
  const { email, name } = data;
  const msg = {
    to: email,
    from: baseNoReply,
    dynamic_template_data: {
      name: name.split(' ')[0],
    },
    template_id: 'd-0cf7b9d1377143a39d4d7ac86fed236d' // Cambiar
  }

  sgMail.send(msg)
    .then(() => {
      console.log('🚀 ~ file: sendgrid.js ~ line 32 ~ emailPQRCreated ~ email sent');
    })
    .catch((error) => {
      console.log('🚀 ~ file: sendgrid.js ~ line 36 ~ emailPQRCreated ~ error', error);
    });
}

function emailJobCreatedProfessional(professional, job) {
  const { email, name } = professional;
  const { title } = job;
  const msg = {
    to: email,
    from: baseNoReply,
    dynamic_template_data: {
      name: name.split(' ')[0],
      title: title,
    },
    template_id: 'd-0f37715937c748e4a06b819da8bf7ae4'
  }

  sgMail.send(msg)
    .then(() => {
      console.log('🚀 ~ file: sendgrid.js ~ line 32 ~ emailJobCreatedProfessional ~ email sent');
    })
    .catch((error) => {
      console.log('🚀 ~ file: sendgrid.js ~ line 36 ~ emailJobCreatedProfessional ~ error', error);
    });
}

function emailJobCreatedClient(client, job) {
  const { email, name } = client;
  const { title } = job;
  const msg = {
    to: email,
    from: baseNoReply,
    dynamic_template_data: {
      name: name.split(' ')[0],
      title: title,
    },
    template_id: 'd-de5f8e530fca4c48a9042d9b56550642'
  }

  sgMail.send(msg)
    .then(() => {
      console.log('🚀 ~ file: sendgrid.js ~ line 32 ~ emailJobCreatedClient ~ email sent');
    })
    .catch((error) => {
      console.log('🚀 ~ file: sendgrid.js ~ line 36 ~ emailJobCreatedClient ~ error', error);
    });
}

function emailJobQuoteClient(client, job) {
  const { email, name } = client;
  const { title, amount } = job;
  const msg = {
    to: email,
    from: baseNoReply,
    dynamic_template_data: {
      name: name.split(' ')[0],
      title: title,
      amount: amount,
    },
    template_id: 'd-d5ae28fa4a9049d3a224d6ff80b07c60'
  }

  sgMail.send(msg)
    .then(() => {
      console.log('🚀 ~ file: sendgrid.js ~ line 32 ~ emailJobQuoteClient ~ email sent');
    })
    .catch((error) => {
      console.log('🚀 ~ file: sendgrid.js ~ line 36 ~ emailJobQuoteClient ~ error', error);
    });
}

function emailJobPaidProfessional(professional, job) {
  const { email, name } = professional;
  const { title, amount } = job;
  const msg = {
    to: email,
    from: baseNoReply,
    dynamic_template_data: {
      name: name.split(' ')[0],
      title: title,
      amount: amount,
    },
    template_id: 'd-9be5e0766fbb460197ff49a2c78de2ad'
  }

  sgMail.send(msg)
    .then(() => {
      console.log('🚀 ~ file: sendgrid.js ~ line 32 ~ emailJobPaidProfessional ~ email sent');
    })
    .catch((error) => {
      console.log('🚀 ~ file: sendgrid.js ~ line 36 ~ emailJobPaidProfessional ~ error', error);
    });
}

function emailJobFinishedClient(client, job) {
  const { email, name } = client;
  const { title } = job;
  const msg = {
    to: email,
    from: baseNoReply,
    dynamic_template_data: {
      name: name.split(' ')[0],
      title: title,
    },
    template_id: 'd-bf4f169842b6454793c89a97c78b1bc0'
  }

  sgMail.send(msg)
    .then(() => {
      console.log('🚀 ~ file: sendgrid.js ~ line 32 ~ emailJobQuoteClient ~ email sent');
    })
    .catch((error) => {
      console.log('🚀 ~ file: sendgrid.js ~ line 36 ~ emailJobQuoteClient ~ error', error);
    });
}

function emailJobClosedProfessional(professional, job) {
  const { email, name } = professional;
  const { title } = job;
  const msg = {
    to: email,
    from: baseNoReply,
    dynamic_template_data: {
      name: name.split(' ')[0],
      title: title,
    },
    template_id: 'd-545c872799854a8685bc806ffe0ec382'
  }

  sgMail.send(msg)
    .then(() => {
      console.log('🚀 ~ file: sendgrid.js ~ line 32 ~ emailJobClosedProfessional ~ email sent');
    })
    .catch((error) => {
      console.log('🚀 ~ file: sendgrid.js ~ line 36 ~ emailJobClosedProfessional ~ error', error);
    });
}

module.exports = {
  emailClientAccountCreated,
  emailProfessionalAccountCreated,
  emailAccountUpdated,
  emailPQRCreated,
  emailJobCreatedProfessional,
  emailJobCreatedClient,
  emailJobQuoteClient,
  emailJobPaidProfessional,
  emailJobFinishedClient,
  emailJobClosedProfessional,
}
