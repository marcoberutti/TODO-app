import { useState, useEffect, useContext } from 'react'
import { TasksContext } from './TasksContext'
import { Form, Buttons, Tasks, SingleTask } from './esercizio';

const FILTERS = {
  Tutti: ()=> true,
  Rimasti: task => !task.completed,
  Completati: task => task.completed
}

function App(props) {

  const tasks = useContext(TasksContext)
  const [filter, setFilter] = useState('Tutti')

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  const taskList = tasks
    .filter(FILTERS[filter])
    .map(task => 
      <SingleTask
        key={task.id}
        task={task}
      />
    )

  return (
    <>
      <Form />
      <hr/>
      <Buttons setFilter={setFilter} filters={FILTERS} filter={filter}/>
      <Tasks taskList={taskList}/>
    </>

  );
}

export default App;
