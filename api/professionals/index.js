const { Router } = require("express");
const multer  = require("multer");

const router = Router();
const upload = multer({ dest: './temp' })

const {
  handlerAllProfessionals,
  handlerOneProfessional,
  handlerCreateProfessional,
  handlerEditProfessional,
  handlerCreateImage,
} = require("./professionals.controller");

router.get("/", handlerAllProfessionals);
router.get("/:id", handlerOneProfessional);
router.post("/", handlerCreateProfessional);
router.post("/image",upload.single('file'), handlerCreateImage);
router.patch("/:id", handlerEditProfessional);


// upload.none('data'),
module.exports = router;
