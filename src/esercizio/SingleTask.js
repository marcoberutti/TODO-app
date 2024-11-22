import { useState, useRef, useEffect } from 'react'

function SingleTask({isCompleted, name, deleteTask, id, toggleTaskCompletion, editTask}){
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
    editTask(id, newTaskName)
    setNewTaskName('')
    setIsEditing(false)
  }

  function handleEditing(){
    setNewTaskName('')
    setIsEditing(false)
  }

  let taskView =(
    <>
      <div>
        <input 
          type="checkbox" 
          onChange={() => toggleTaskCompletion(id)}
          checked={isCompleted}
        />
        <span className={isCompleted ? "checked" : ''}>{name}</span>
      </div>
      <div>
        <button className='addTaskBtn'>
          <span className="material-symbols-outlined">
            add_task
          </span>
        </button>
        <button onClick={()=> setIsEditing(true)}>Modifica</button>
        <button onClick={()=>deleteTask(id)}>Elimina</button>
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