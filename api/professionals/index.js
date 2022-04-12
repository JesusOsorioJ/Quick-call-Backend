const { Router } = require("express");
const {
  handlerAllProfessionals,
  handlerOneProfessional,
  handlerCreateProfessional,
  handlerEditProfessional,
  handlerTypeProfessional,
} = require("./professionals.controller");

const router = Router();

// (handlerAllProfessionals) consultar todos los professionales
// (handlerOneProfessional) buscar por profesional
// (handlerCreateProfessional) Crear un profesional
// (handlerEditProfessional) editar datos de profesional
// (handlerTypeProfessional) Consultar o consultar disponibilidad de professional  (ciudad, disponibilidad-hora o 24 horas)
// (handlerTypeProfessional) filtrar o consultar por especialidad y acreditacion
// (handlerTypeProfessional) buscar por tipo de contrato (empresa o persona)
// (handlerTypeProfessional) experiencia en plataforma
// "FILTER" (disponibility,especiality,contract,experience)
// "TYPE" :((horas o 24), (acreditado o no acreditado), (empresa o persona ), (años experiencia)))

router.get("/", handlerAllProfessionals);
router.get("/:id", handlerOneProfessional);
router.post("/", handlerCreateProfessional);
router.patch("/:id", handlerEditProfessional);
router.get("/filter",handlerTypeProfessional); // '/filter/:filter/type/:type'  /filter?filter="test"&type="test"
module.exports = router;
