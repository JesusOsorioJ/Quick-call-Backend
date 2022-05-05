const { Router } = require("express");
const router = Router();
const {
  handlerAllProfessionals,
  handlergetProfessionalById,
  handlerCreateProfessional,
  handlerUpdateProfessional,
} = require("./professionals.controller");

const { hasRole, isSelf } = require('../../auth/auth.service')

router.get("/", handlerAllProfessionals);
router.get("/:id", handlergetProfessionalById);
router.post("/", handlerCreateProfessional);
router.patch("/:id", hasRole(['admin', 'professional']), isSelf(), handlerUpdateProfessional);

// upload.none('data'),
module.exports = router;
