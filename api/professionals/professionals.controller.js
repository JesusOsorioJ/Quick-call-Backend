const {search} = require('./professionals.service')
  
//consultar todos los professionales
//buscar todos los profesionalesxx
//editar datos de profesional
//Consultar o consultar disponibilidad de professional  (ciudad, disponibilidad-hora o 24 horas)
//filtrar o consultar por especialidad y acreditacion
//buscar por tipo de contrato (empresa o persona)
//experiencia en plataforma


function handlerOne(req, res) {
    const id = req.params.id;
    const professional = search('id', id);
  
    if (!task) {
      res.status(404).json({ message: `Professional not found with id: ${id}` });
    } else {
      res.json(professional);
    }
  }

  module.exports= { handlerOne}