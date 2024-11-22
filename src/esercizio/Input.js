import { useState, useRef, useEffect, useContext } from 'react'
import { TasksDispatchContext } from '../TasksContext'
import { nanoid } from 'nanoid/non-secure'
import ModalError from './ModalError'

function Form(){
  const dispatch = useContext(TasksDispatchContext)
  const [nome, setNome] = useState('')
  const [formattedDate, setDate] = useState('')
  const [error, setError] = useState('')

  const NewTaskInput = useRef('')

  useEffect(() => {
    NewTaskInput.current.focus()
  }, [nome])

  function handleChange(e){
    setNome(e.target.value);
  }

  function handleDataChange(e){
    setDate(e.target.value)
  }

  function handleAdding(){
    if(nome.trim() && formattedDate ){
    dispatch({
      type: 'added',
      id: nanoid(),
      formattedDate,
      nome: NewTaskInput.current.value
    })
    setNome('')
    setDate('');
    setError('')
    } else {
      setError('data obbligatoria')
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
        <input 
          type="datetime-local"
          value={formattedDate}
          onChange={handleDataChange}
          required
        />
        <button 
          onClick={handleAdding}
          >
          Aggiungi
        </button>
        {error && <ModalError val={error} />}        
        {/* TODO INSERIRE ANCHE INPUT TYPE DATE PER COLLEGARE AL GOOGLE CALENDAR O TASKS */}
      </div>
    </div>
  )
}

export default Form