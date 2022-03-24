const {getOneTask} = require('./PQRS.service')
  
  function handlerOneTask(req, res) {
    const id = req.params.id;
    const task = getOneTask(id);
  
    if (!task) {
      res.status(404).json({ message: `Task not found with id: ${id}` });
    } else {
      res.json(task);
    }
  }

  module.exports= { handlerOneTask}