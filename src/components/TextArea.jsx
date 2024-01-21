import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addText } from '../redux/notes/notesSlice';

function TextArea() {
  const items = useSelector((state) => state.notes.items);
  console.log(items);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleClick = (e) => {
    if (text.trim() !== "") {
      dispatch(addText(text));
      setText(""); // Clear the input after adding the text
    }
    console.log(text);


  }
  return (
    <div >
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
  <div className='blue color'></div>
  <div className='pink color '></div>
  <div className='green color'></div>
  <div className='purple color'></div>
</div>
<div><button onClick={handleClick}>add</button></div>

        </div>
        
      
      </div>

      <ul className='notes-list'>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default TextArea
