import { useState, useEffect, useReducer } from 'react'
import { TasksContext, TasksDispatchContext } from './TasksContext'
import { TasksReducer, Form, Buttons, Tasks, SingleTask } from './esercizio';

const FILTERS = {
  Tutti: ()=> true,
  Rimasti: task => !task.completed,
  Completati: task => task.completed
}

function App(props) {

  const [tasks, dispatch] = useReducer(TasksReducer, props.tasks)
  const [filter, setFilter] = useState('Tutti')

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  const taskList = tasks
    .filter(FILTERS[filter])
    .map(task => 
      <SingleTask
        key={task.id}
        isCompleted={task.completed}
        formattedDate={task.formattedDate}
        name={task.nome}
        id={task.id}
      />
    )

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <Form />
        <hr/>
        <Buttons setFilter={setFilter} filters={FILTERS} filter={filter}/>
        <Tasks taskList={taskList}/>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export default App;
