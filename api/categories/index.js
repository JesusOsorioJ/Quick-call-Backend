const { Router } = require("express");
const {
  handlerAllCategories,
  handlerOneCategories,
  handlerCreateCategories,
  handlerEditCategories
} = require("./categories.controller");

const router = Router();

router.get("/all", handlerAllCategories);
router.get("/", handlerOneCategories);
router.post("/", handlerCreateCategories);
router.patch("/:id", handlerEditCategories);

module.exports = router;
