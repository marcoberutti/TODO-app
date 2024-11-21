import { useRef } from 'react';

function EsempioRef(){
  const inputRef = useRef(null);

  function handleClick(){
    inputRef.current.focus()
  }

  return (
    <>
      <h1 className='test'>input</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}

export default EsempioRef;