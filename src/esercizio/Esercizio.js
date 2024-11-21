import { useState } from 'react'
import { nanoid } from 'nanoid/non-secure'
import Form from "./Input"
import Buttons from "./Buttons"
import Tasks from "./Tasks"
import SingleTask from './SingleTask';

const FILTERS = {
  Tutti: ()=> true,
  Rimasti: task => !task.completed,
  Completati: task => task.completed
}

function Esercizio(props){

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('Tutti')

  const taskList = tasks
    .filter(FILTERS[filter])
    .map(task => 
      <SingleTask 
        key={task.id}
        isCompleted={task.completed} 
        name={task.nome}
        id={task.id}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    )

  function addTask(name){
    const newTask = {
      id: nanoid(),
      nome: name,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(id){
    const remainingTasks = tasks
    .filter(task => id !== task.id)
    setTasks(remainingTasks)
  }

  function toggleTaskCompletion(id) {
    const updatedTask = tasks
    .map(task => {
      if(id === task.id){
        return { ...task, completed: !task.completed}
      }
      return task;
      })
      setTasks(updatedTask)
  }

  return(
      <>
      <Form addTask={addTask}/>
      <hr/>
      <Buttons setFilter={setFilter} filters={FILTERS} filter={filter}/>
      <Tasks taskList={taskList}/>
      </>

  )
}

export default Esercizio