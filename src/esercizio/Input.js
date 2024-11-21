import { useState } from 'react'

function Form({addTask}){

  const [nome, setNome] = useState('')

  function handleChange(e){
    setNome(e.target.value);
  }
  
  return (
    <div className="inputForm">
      <h3>Che cosa devo fare:</h3>
      <div className="inputContainer">
        <input type='text' value={nome} onChange={handleChange}/>
        <button 
        onClick={()=>addTask(nome)}
        >
          Aggiungi
        </button>
      </div>
    </div>
  )
}

export default Form