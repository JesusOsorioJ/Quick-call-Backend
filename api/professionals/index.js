const { Router } = require("express");
const router = Router();
const {
  handlerAllProfessionals,
  handlerOneProfessional,
  handlerCreateProfessional,
  handlerEditProfessional,
} = require("./professionals.controller");

router.get("/", handlerAllProfessionals);
router.get("/:id", handlerOneProfessional);
router.post("/", handlerCreateProfessional);
router.patch("/:id", handlerEditProfessional);

// upload.none('data'),
module.exports = router;
