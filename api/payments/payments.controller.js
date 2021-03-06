const {
  makePayment, createPayment, createCustomer, retrieveCustomer, getPaymentById
} = require('./payments.service');
const { updateClient } = require('../clients/clients.service');
const { getProfessionalById } = require('../professionals/professionals.service');
const { updateJobsById } = require('../jobs/jobs.service');
const { emailJobPaidProfessional } = require('../../utils/sendgrid');
const { socket } = require('../../config/websocket');


async function handlerPayment(req, res) {
  const { paymentMethod, amount, description, jobId } = req.body;

  try {
    let customer;
    if(req.user?.payment?.customerId) {
      customer = await retrieveCustomer(req.user?.payment?.customerId);
    } else {
      // create customer
      customer = await createCustomer(req.user, paymentMethod);
    }

    // Update user with customer info
    const userToUpdate = {
      payment: {
        customerId: customer.id,
        cards: [{
          ...paymentMethod.card,
          paymentMethodId: paymentMethod.id,
        }],
      },
    };

    await updateClient(req.user._id, userToUpdate);
    const payment = await makePayment({ paymentMethod, amount, customer, description });

    // save payment to db
    const registeredPayment = {
      refId: payment.id,
      description: payment.description,
      value: payment.amount,
      currency: payment.currency,
      userId: req.user._id,
    };
    const { _id } = await createPayment(registeredPayment);

    const job = await updateJobsById(jobId, { payment: _id, status: 'En progreso' });

    const professional = await getProfessionalById(job.professional);
    await socket.io.emit(`${req.user._id}:createPayment`, _id);
    await socket.io.emit(`${professional._id}:createPayment`, jobId);
    await emailJobPaidProfessional(professional, job);

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerGetPaymentsByUserId(req, res) {
  const paymentId = req.params.paymentId;
  try {
    const payment = await getPaymentById(paymentId);
    return res.status(200).json(payment);
  } catch (error) {
    return res.status(500).json(error);
  }

}

async function handlerGetPaymentById(req, res) {
  const paymentId = req.params.id;
  try {
    const payment = await getPaymentById(paymentId);
    return res.status(200).json(payment);
  } catch (error) {
    return res.status(404).json(error);
  }
}

module.exports = {
  handlerPayment,
  handlerGetPaymentsByUserId,
  handlerGetPaymentById,
};
