import FilterButton from "./FilterButton"

function Buttons({setFilter, filters, filter}){
  // const isactive = 'active'

  const filterButtons = Object.keys(filters).map(name =>
    <FilterButton 
      key={name}
      name={name}
      isActive={name === filter}
      setFilter={setFilter}
    />
  )

  return (
    <div className="buttonsContainer">
      <span>Filtra: </span>
      <div className="buttons">
        {filterButtons}
      </div> 
    </div>
  )
}

export default Buttons