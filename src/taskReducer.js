function TasksReducer(tasks, action){
  switch(action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          nome: action.nome,
          completed: false
        }
      ]
    }
    case 'deleted': {
      return tasks.filter(task => action.id !== task.id);
    }
    case 'edited': {
      return tasks.map(task =>{
        if(task.id === action.id) {
          return {...task, nome: action.newName}
        }
        return task
      });
    }
    case 'toggled': {
      return tasks
      .map(task => {
        if(action.id === task.id){
          return { ...task, completed: !task.completed}
        }
        return task;
        })
    }
    default: {
      throw Error(`Azione non riconosciuta: ${action.type}`)
    }
  }
}

export default TasksReducer