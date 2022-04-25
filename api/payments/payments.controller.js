const {
  makePayment, createPayment, createCustomer, retrieveCustomer,
} = require('./payments.service');
const { updateClient } = require('../clients/clients.service');

async function handlerPayment(req, res) {
  const { paymentMethod, amount } = req.body;
  console.log('line 8: ', req.user);
  console.log('line 9: ', req.user?.payment?.customerId);

  try {
    let customer;
    if(req.user?.payment?.customerId) {
      customer = await retrieveCustomer(req.user?.payment?.customerId);
    } else {
      // create customer
      customer = await createCustomer(req.user, paymentMethod);
    }

    console.log(customer);

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
    console.log('error', error);
    res.status(500).json(error);
  }
}

module.exports = {
  handlerPayment,
};
