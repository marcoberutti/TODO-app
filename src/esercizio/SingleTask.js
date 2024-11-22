import { useState, useRef, useEffect, useContext } from 'react'
import { TasksDispatchContext } from '../TasksContext';

function SingleTask({isCompleted, name, id, formattedDate}){
  const dispatch = useContext(TasksDispatchContext)
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const editInputRef = useRef(null); 
  useEffect(() => {
    if(isEditing){
      editInputRef.current.focus()
    }
  }, [isEditing])
  
  function handleNewTaskName(e){
    setNewTaskName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch({
      type: 'edited',
      newName: newTaskName,
      id
    })
    setNewTaskName('')
    setIsEditing(false)
  }

  function handleEditing(){
    setNewTaskName('')
    setIsEditing(false)
  }

  function deleteTask(){
    dispatch({
      type: 'deleted',
      id
    })
  }
  
  function toggleTaskCompletion() {
    dispatch({
      type: 'toggled',
      id
    })
  }

  let taskView =(
    <>
      <div>
        <input 
          type="checkbox" 
          onChange={() => toggleTaskCompletion()}
          checked={isCompleted}
        />
        <span className={isCompleted ? "checked" : ''}>{name}</span>
        <span>{(formattedDate.replace('T', ' '))}</span>
      </div>
      <div>
        <button className='addTaskBtn'>
          <span className="material-symbols-outlined">
            add_task
          </span>
        </button>
        <button onClick={()=> setIsEditing(true)}>Modifica</button>
        <button onClick={()=>deleteTask()}>Elimina</button>
      </div>
    </>
  )

  let taskEdit =(
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">
            Modifica {name}
          </label>
          <input
            ref={editInputRef}
            value={newTaskName}
            onChange={handleNewTaskName}
            type="text"
            />
        </div>
        <div>
          <button onClick={handleEditing}>Cancella</button>
          <button type='submit'>Salva</button>
        </div>
      </form>
  )

    return(
        <div className="task">
          { isEditing ? taskEdit : taskView }
        </div>
      )
}

export default SingleTask