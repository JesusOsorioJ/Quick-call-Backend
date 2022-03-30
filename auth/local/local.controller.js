const { getClientByEmail } = require('../../api/clients/clients.service');
const { signToken } = require('../auth.service');

async function handlerLoginClient(req, res) {
  const { email, password } = req.body;

  try {
    const client = await getClientByEmail(email);
    if (!client) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await client.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = signToken(client.profile);

    return res.status(200).json(token);
  } catch (error) {
    return res.status(400).json(error);
  }
}

module.exports = {
  handlerLoginClient,
};
