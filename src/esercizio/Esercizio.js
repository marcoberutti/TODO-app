import Input from "./Input"
import Buttons from "./Buttons"
import Tasks from "./Tasks"

function Esercizio({taskList}){

  return(
      <>
      <Input taskList={taskList}/>
      <hr/>
      <Buttons />
      <Tasks taskList={taskList}/>
      </>

  )
}

export default Esercizio