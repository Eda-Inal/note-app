import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filteredItems } from '../redux/notes/notesSlice';


function Filter() {
  const [search,setSearch] = useState("");
const dispatch = useDispatch();
  const handleChange=(e)=> {
    setSearch(e.target.value);
dispatch(filteredItems(e.target.value))
   
  }
  return (
    <div>
      <input className='search' type="search"placeholder='Search' value={search} onChange={handleChange} />
    </div>

  )
}

export default Filter
