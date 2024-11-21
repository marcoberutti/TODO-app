function SingleTask({isCompleted, name, deleteTask, id, toggleTaskCompletion}){
    return(
        <div className="task">
          <div>
            <input type="checkbox" onChange={() => toggleTaskCompletion(id)} />
            <span className={isCompleted ? "checked" : ''}>{name}</span>
          </div>
          <div>
            <button>Modifica</button>
            <button onClick={()=>deleteTask(id)}>Elimina</button>
          </div>
        </div>
      )
}

export default SingleTask