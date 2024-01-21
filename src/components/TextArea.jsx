import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addText,deleteItemm } from '../redux/notes/notesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';


function TextArea() {
  const items = useSelector((state) => state.notes.items);
  let colors = ["blue","pink","green","yellow","purple"]
  console.log(items);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const[error,setError] = useState("");
  const [selectedBackground, setSelectedBackground] = useState("");
 
  const handleClick = () => {

    if(selectedBackground == ""){
      setError("Please choose a color.")
    }
    if(text.trim() == "" ){
      setError("You can not add empty note!")
    }
    if (text.trim() !== "" && selectedBackground !== "") {
      dispatch(addText({ text, background: selectedBackground }));
      setText(""); 
      setSelectedBackground("");
      setError(""); 
    }
  }
 

  const handleLi = (background) => {
   
    setSelectedBackground(background);
  }
  
  
  return (
    <div >
      <div > 
{error && <div className='error'>{error}</div>}
      </div>
    
      <div className='text-container'>
       
        <textarea name=""
          id=""
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Enter your note here...'
          cols="30" rows="10">

        </textarea> 
        <div className='text-bottom'>
<div className='colors'>
{colors.map((color) => (
    <div key={color} className={`color ${color}`} onClick={() => handleLi(color)}>
  
    </div>
  ))} 


  {/* <div className='blue color' onClick={(e)=> handleLi(e.target.id)}  id='blue'></div>
  <div className='pink color ' onClick={(e)=> handleLi(e.target.id)} id='pink'></div>
  <div className='green color' onClick={(e)=> handleLi(e.target.id)}id='green'></div>
  <div className='yellow color' onClick={(e)=> handleLi(e.target.id)} id='yellow'></div> */}
</div>
<div><button onClick={handleClick}>add</button></div>

        </div>
        
      
      </div>

      <ul className='notes-list'>
        {items.map((item) => (
          <li  className={item.background} key={item.id} ><span>  <FontAwesomeIcon  icon={faTrashAlt} className='trash' /></span>{item.text} </li>
        ))}
      </ul>
    </div>
  )
}

export default TextArea
