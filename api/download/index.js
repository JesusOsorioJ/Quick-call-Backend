const { Router } = require("express");
const router = Router();
const { handlerJobPdfDownload } = require("./download.controller");

router.get('/job_pdf/:id', handlerJobPdfDownload);

module.exports = router;
