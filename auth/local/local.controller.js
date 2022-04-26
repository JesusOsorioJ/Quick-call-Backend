const { getClientByEmail } = require('../../api/clients/clients.service');
const { getProfessionalByEmail } = require('../../api/professionals/professionals.service');
const { signToken, validateToken } = require('../auth.service');

async function handlerLoginUser(req, res) {
  const { email, password } = req.body;

  try {
    const client = await getClientByEmail(email);
    const professional = await getProfessionalByEmail(email);

    const user = client ? client : (professional ? professional : admin);
    const role = client ? 'client' : (professional ? 'professional' : 'admin');

    if (!user) {
      return res.status(401).json('Correo o contraseña inválido, intente nuevamente');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json('Correo o contraseña inválido, intente nuevamente');
    }

    const token = signToken({...user.profile, role});

    return res.status(200).json(token);
  } catch (error) {
    return res.status(400).json('Correo o contraseña inválido, intente nuevamente');
  }
}

async function handlerValidateToken(req, res) {
  try {
    const payload = await validateToken(req.body.token);
    return res.status(200).json(payload);
  } catch (error) {
    return res.status(400).json('Token inválido, intente nuevamente');
  }
};

module.exports = {
  handlerLoginUser,
  handlerValidateToken,
};
