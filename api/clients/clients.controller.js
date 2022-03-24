const {getAllTask, getOneTask} = require('./clients.service')
  
function handlerAllTask(req, res) {
  const tasks = getAllTask();
  res.json(tasks);
}  

function handlerOneTask(req, res) {
    const id = req.params.id;
    console.log('xxxxxxxxxxxx')
    const task = getOneTask(id);
  
    if (!task) {
      res.status(404).json({ message: `Task not found with id: ${id}` });
    } else {
      res.json(task);
    }
  }

  module.exports= {handlerAllTask, handlerOneTask}
  