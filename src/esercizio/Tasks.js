import SingleTask from "./SingleTask"

function Tasks({taskList}){

  return (
    <>
      <h4>{taskList.length} task in questa lista</h4>
      <section className="tasksContainer">
        <SingleTask taskList={taskList}/>
      </section>
    </>
  )
}

export default Tasks