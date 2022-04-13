const { Router } = require("express");
const {
  handlerAllProfessionals,
  handlerOneProfessional,
  handlerCreateProfessional,
  handlerEditProfessional,
} = require("./professionals.controller");

const router = Router();

router.get("/", handlerAllProfessionals);
router.get("/:id", handlerOneProfessional);
router.post("/", handlerCreateProfessional);
router.patch("/:id", handlerEditProfessional);

module.exports = router;
