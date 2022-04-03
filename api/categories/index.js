const { Router } = require("express");
const {
  handlerCategories,
  handlerCreateCategories,
  handlerEditCategories
} = require("./service.controller");

const router = Router();

router.get("/", handlerCategories);
router.post("/", handlerCreateCategories);
router.patch("/:id", handlerEditCategories);

module.exports = router;
