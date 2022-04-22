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

module.exports = {
  emailClientAccountCreated,
  emailAccountUpdated,
}
