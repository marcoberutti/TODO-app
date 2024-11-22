import { useState, useRef, useEffect } from 'react'

function Form({addTask}){
  const [nome, setNome] = useState('')
  const NewTaskInput = useRef('')

  useEffect(() => {
    NewTaskInput.current.focus()
  }, [nome])

  function handleChange(e){
    setNome(e.target.value);
  }

  function handleAdding(){
    if(nome.trim()){
      addTask(nome)
      setNome('')
    }
  }

  function handleAddingFromEnter(e){
    if(e.key === "NumpadEnter" || e.key === 'Enter'){
      handleAdding()
    }
  }

  return (
    <div className="inputForm">
      <h3>Che cosa devo fare:</h3>
      <div className="inputContainer">
        <input 
          ref={NewTaskInput}
          type='text' 
          value={nome} 
          onChange={handleChange}
          onKeyDown={handleAddingFromEnter}
          />
        <button 
          onClick={handleAdding}
          >
          Aggiungi
        </button>
      </div>
    </div>
  )
}

export default Form