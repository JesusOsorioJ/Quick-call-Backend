const tasks = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
      completed: true,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
      completed: false,
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description 3',
      completed: false,
    },
  ]

function getOneTask(id) {
    const task = tasks.find(task => task.id === Number(id));
  
    if (!task) {
      return null;
    }
  
    return task;
  }

module.exports={getOneTask}