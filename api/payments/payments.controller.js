const {
  makePayment, createPayment, createCustomer, retrieveCustomer, getPaymentsByUserId
} = require('./payments.service');
const { updateClient } = require('../clients/clients.service');

async function handlerPayment(req, res) {
  const { paymentMethod, amount } = req.body;

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
    const payment = await makePayment({ paymentMethod, amount, customer });

    // save payment to db
    const registeredPayment = {
      refId: payment.id,
      description: payment.description,
      value: payment.amount,
      currency: payment.currency,
      userId: req.user._id,
    };
    await createPayment(registeredPayment);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerGetPaymentsByUserId(req, res) {
  const userId = req.params.id;
  const paymentId = req.params.paymentId;
  const role = req.user.role;
  try {
    const payment = await getPaymentsByUserId(paymentId);
    return res.status(200).json(payment);
  } catch (error) {
    return res.status(500).json(error);
  }

}

module.exports = {
  handlerPayment,
  handlerGetPaymentsByUserId,
};
