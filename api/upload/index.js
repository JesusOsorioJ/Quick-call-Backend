const { Router } = require("express");
const router = Router();
const multer  = require("multer");
const upload = multer({ dest: './temp' });

const { handlerCreateImage } = require('./upload.controller');

router.post("/image", upload.single('file'), handlerCreateImage);

module.exports = router;
