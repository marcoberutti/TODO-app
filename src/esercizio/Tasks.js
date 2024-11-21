function Tasks({taskList}){

  return (
    <>
      <h4>{taskList.length} task in questa lista</h4>
      <section className="tasksContainer">
        {taskList}
      </section>
    </>
  )
}

export default Tasks