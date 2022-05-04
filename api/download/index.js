const { Router } = require("express");
const router = Router();
// const { isAuthenticated } = require("../../auth/auth.service");
const { handlerJobPdfDownload } = require("./download.controller");

router.get('/job/:id', handlerJobPdfDownload);

module.exports = router;
