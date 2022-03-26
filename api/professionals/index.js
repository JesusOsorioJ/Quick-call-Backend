const { Router } = require("express");
const {
  handlerAllProfessionals,
  handlerOneProfessional,
  handlerCreateProfessional,
  handlerEditProfessional,
  handlerTypeProfessional,
} = require("./professionals.controller");

const router = Router();

//consultar todos los professionales
//buscar por profesional
//Crear un profesional
//editar datos de profesional
//Consultar o consultar disponibilidad de professional  (ciudad, disponibilidad-hora o 24 horas)
//filtrar o consultar por especialidad y acreditacion
//buscar por tipo de contrato (empresa o persona)
//experiencia en plataforma
//(filter (disponibility,especiality,contract,experience) type:((horas o 24), (acreditado o no), (empresa o persona ), (años)))

router.get("/", handlerAllProfessionals);
router.get("/:id", handlerOneProfessional);
router.post("/", handlerCreateProfessional);
router.patch("/:id", handlerEditProfessional);
router.get("/:filter/:type/:subtype",handlerTypeProfessional);
router.get("/:filter/:type", handlerTypeProfessional);

module.exports = router;
