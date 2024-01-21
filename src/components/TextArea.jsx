import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addText,addBackground } from '../redux/notes/notesSlice';

function TextArea() {
  const items = useSelector((state) => state.notes.items);
  console.log(items);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [selectedBackground, setSelectedBackground] = useState("");
 
  const handleClick = () => {

    
    if (text.trim() !== "" && selectedBackground !== "") {
      dispatch(addText({ text, background: selectedBackground }));
      setText(""); 
      setSelectedBackground(""); 
    }
  }

  const handleLi = (background) => {
   
    setSelectedBackground(background);
  }
  
  
  return (
    <div >
      <div > 

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
  <div className='blue color' onClick={(e)=> handleLi(e.target.id)}  id='blue'></div>
  <div className='pink color ' onClick={(e)=> handleLi(e.target.id)} id='pink'></div>
  <div className='green color' onClick={(e)=> handleLi(e.target.id)}id='green'></div>
  <div className='yellow color' onClick={(e)=> handleLi(e.target.id)} id='yellow'></div>
</div>
<div><button onClick={handleClick}>add</button></div>

        </div>
        
      
      </div>

      <ul className='notes-list'>
        {items.map((item) => (
          <li className={item.background} key={item.id} >{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default TextArea
