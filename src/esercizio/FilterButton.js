function FilterButton({name, isActive, setFilter}){
  return(
    <button 
      className={isActive ? 'active' : ''}
      onClick={()=> setFilter(name)}
    >
      {name}
    </button>
  )
}

export default FilterButton