const professionals = require('./professionals.model') 

function search (properties, values){
  const buscar = professionals.find({propeties:values})
}

function search1 (properties, values, values1){
  const buscar = professionals.find({prop:req})
}

function getOne (id) {
    const task = tasks.find(task => task.id === Number(id));
  
    if (!task) {
      return null;
    }
  
    return task;
  }

module.exports={search}