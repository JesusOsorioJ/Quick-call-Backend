const { Router } = require("express");
const router = Router();
const multer  = require("multer");
const upload = multer({ dest: './temp' });
const { handlerCreateImage } = require('./upload.controller'); //handlerDeleteImage
// const { isAuthenticated } = require('../../auth/auth.service');

router.post("/image", upload.single('file'), handlerCreateImage);
// router.delete("/image/:publicId", isAuthenticated(), handlerDeleteImage);

module.exports = router;
