import React, { useState } from 'react'


function Filter() {
  const [search,setSearch] = useState("");

  const handleChange=(e)=> {
    setSearch(e.target.value);
   
  }
  return (
    <div>
      <input className='search' type="search"placeholder='Search' value={search} onChange={handleChange} />
    </div>

  )
}

export default Filter
