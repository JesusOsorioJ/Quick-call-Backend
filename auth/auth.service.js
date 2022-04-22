const jsonwebtoken = require('jsonwebtoken');
const compose = require('composable-middleware');

const { getClientByEmail } = require('../api/clients/clients.service');
const { getProfessionalByEmail } = require('../api/professionals/professionals.service');
const { getAdminByEmail } = require('../api/admin/admin.service');

/**
 * Returns a jwt token signed by the app secret
 * @param {String} payload
 * @returns {String} token
 */
function signToken(payload) {
  const token = jsonwebtoken.sign(payload, 'secret_token', {
    expiresIn: '2h',
  });

  return token;
}

/**
 * Validate JWT
 * @param {String} token
 * @returns {Object} payload
 */
async function validateToken(token) {
  try {
    const payload = await jsonwebtoken.verify(token, 'secret_token');
    return payload;
  } catch (error) {
    console.log('🚀 ~ file: auth.service.js ~ line 13 ~ validateToken ~ error', error);
    return null;
  }
}

function isAuthenticated() {
  return compose().use(
    async (req, res, next) => {
      // 1. req.headers -> authorization
      const authHeader = req.headers.authorization;
      // 2. If (authHeader)
      if (!authHeader) {
        return res.status(401).end();
      }
      // 3. split para obtener el token
      const [, token] = authHeader.split(' ');
      // 4. validar el token
      const payload = await validateToken(token);

      // 5. if token falsy -> decir q no esta authori
      if (!payload) {
        return res.status(401).end();
      }

      // 6. buscar el usuario por el email del payload del token
      let user;
      switch(payload.role) {
        case 'client':
          user = await getClientByEmail(payload.email);
          break;
        case 'professional':
          user = await getProfessionalByEmail(payload.email);
          break;
        case 'admin':
          user = await getAdminByEmail(payload.email);
        default:
          return res.status(401).end();
      }

      if (!user) {
        return res.status(401).end();
      }

      // 7. agregar ese usuario al req.user
      req.user = {...user, role: payload.role};
      // 8. siga al siguiente middleware next()
      next();
      return null;
  })
}

function hasRole(allowedRoles = []) {
  return compose()
    .use(isAuthenticated())
    .use(
      async (req, res, next) => {
        const { role } = req.user;
        if (!allowedRoles.includes(role)) {
          return res.status(403).json('Unauthorized access').end();
        }
        next();
        return null;
      }
    )
}

module.exports = {
  isAuthenticated,
  hasRole,
  signToken,
};
