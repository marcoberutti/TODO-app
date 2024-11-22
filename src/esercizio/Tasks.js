function Tasks({taskList}){

  return (
    <>
      {
        taskList.length > 0 ? (
          <>
            <h4>{taskList.length} task in questa lista</h4>
            <section className="tasksContainer">
              {taskList}
            </section>
          </>
          ) : 
          <h3>Nessun task in questa lista</h3>
      }
    </>
  )
}

export default Tasks