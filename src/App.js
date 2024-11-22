// import Lezione from './lezione/Lezione';import { useState, useEffect } from 'react'
import { useState, useEffect, useReducer } from 'react'
import { nanoid } from 'nanoid/non-secure'
import Form from "./esercizio/Input"
import Buttons from "./esercizio/Buttons"
import Tasks from "./esercizio/Tasks"
import SingleTask from './esercizio/SingleTask';
import TasksReducer from './taskReducer'

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
        name={task.nome}
        id={task.id}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        editTask={editTask}
      />
    )

  function addTask(nome){
    dispatch({
      type: 'added',
      id: nanoid(),
      nome
    })
  }

  function deleteTask(id){
    dispatch({
      type: 'deleted',
      id
    })
  }

  function editTask(id, newName){
    dispatch({
      type: 'edited',
      newName,
      id
    })
  }

  function toggleTaskCompletion(id) {
    dispatch({
      type: 'toggled',
      id
    })
  }

  return (
    <div className="App">
      {/* <Lezione /> */}
      <div className="mainContainer">
        <h2>I miei task</h2>
          <div className="subContainer">
          <Form addTask={addTask}/>
          <hr/>
          <Buttons setFilter={setFilter} filters={FILTERS} filter={filter}/>
          <Tasks taskList={taskList}/>
          </div>
        </div>
    </div>
  );
}

export default App;
