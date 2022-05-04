const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const baseNoReply = '"no-reply.quickcall@qc.com" <rideluis@gmail.com>';

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

function emailJobCreatedProfessional(data) {
  const { email, name, objective } = data;
  const msg = {
    to: email,
    from: baseNoReply,
    dynamic_template_data: {
      name: name.split(' ')[0],
      objective: objective,
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

function emailJobCreatedClient(client, title) {
  const { email, name } = client;
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

module.exports = {
  emailClientAccountCreated,
  emailAccountUpdated,
  emailPQRCreated,
  emailJobCreatedProfessional,
  emailJobCreatedClient,
}
