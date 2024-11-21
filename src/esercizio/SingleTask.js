function SingleTask({taskList}){

    return(
        <div className="task">
          <input type="checkbox"/>
          <span>{taskList[0].nome}</span>
          <button>Modifica</button>
          <button>Elimina</button>
        </div>
      )
}

export default SingleTask