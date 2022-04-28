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
    return res.status(400).json(error);
  }
}

async function handlerValidateToken(req, res) {
  try {
    let user;
    const payload = await validateToken(req.body.token);
    if (payload.error) { return res.status(400).json(payload); }
    switch(payload.role) {
      case 'client':
        user = await getClientByEmail(payload.email);
        break;
      case 'professional':
        user = await getProfessionalByEmail(payload.email);
        break;
      case 'admin':
        user = await getAdminByEmail(payload.email);
        break;
      default:
        return res.status(400).json('Error retrieving user');
    }
    return res.status(200).json({...user.dashboardProfile, role: payload.role});
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  handlerLoginUser,
  handlerValidateToken,
};
