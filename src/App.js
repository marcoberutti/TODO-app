import './App.css';
// import Lezione from './lezione/Lezione';import { useState, useEffect } from 'react'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid/non-secure'
import Form from "./esercizio/Input"
import Buttons from "./esercizio/Buttons"
import Tasks from "./esercizio/Tasks"
import SingleTask from './esercizio/SingleTask';

const FILTERS = {
  Tutti: ()=> true,
  Rimasti: task => !task.completed,
  Completati: task => task.completed
}

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
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

  function editTask(id, newName){
    const editedTask = tasks.map(task =>{
      if(task.id === id) {
        return {...task, nome: newName}
      }
      return task
    });
    setTasks(editedTask)
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
