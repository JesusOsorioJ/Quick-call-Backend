const { Router } = require("express");
const multer  = require('multer');

const router = Router();
// const upload = multer({ dest: './temp' })
const upload = multer()

const {
  handlerAllProfessionals,
  handlerOneProfessional,
  handlerCreateProfessional,
  handlerEditProfessional,
} = require("./professionals.controller");

router.get("/", handlerAllProfessionals);
router.get("/:id", handlerOneProfessional);
router.post("/",upload.fields([{ name: 'files'}]), handlerCreateProfessional);
router.patch("/:id", handlerEditProfessional);

// upload.none('data'),
module.exports = router;
