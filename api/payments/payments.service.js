const Stripe = require('stripe');

const Payment = require('./payments.model');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//Stripe
async function createCustomer(user, paymentMethod) {
  try {
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
      payment_method: paymentMethod.id,
    });
    return customer;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

async function retrieveCustomer(customerId) {
  try {
    const customer = await stripe.customers.retrieve(customerId);

    return customer;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

async function makePayment({ paymentMethod, amount, customer }) {
  const { id } = paymentMethod;

  try {
    const payment = await stripe.paymentIntents.create({
      payment_method: id,
      amount,
      currency: 'usd',
      confirm: true,
      description: 'Example charge',
      customer: customer.id,
      // Automatically send receipts when payments are successful
      receipt_email: customer.email,
    });

    return payment;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

//Mongoose
function createPayment(payment) {
  return Payment.create(payment);
}

module.exports = {
  makePayment,
  createCustomer,
  createPayment,
  retrieveCustomer,
};
