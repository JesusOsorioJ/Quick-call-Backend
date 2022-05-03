const { Router } = require("express");
const router = Router();
const {
  handlerAllProfessionals,
  handlergetProfessionalById,
  handlerCreateProfessional,
  handlerEditProfessional,
} = require("./professionals.controller");

router.get("/", handlerAllProfessionals);
router.get("/:id", handlergetProfessionalById);
router.post("/", handlerCreateProfessional);
router.patch("/:id", handlerEditProfessional);

// upload.none('data'),
module.exports = router;
