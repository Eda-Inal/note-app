import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addText, deleteItems,editedItems } from '../redux/notes/notesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenToSquare } from '@fortawesome/free-regular-svg-icons';



function TextArea() {
  const items = useSelector((state) => state.notes.items);
  const edit = useSelector((state) => state.notes.edit); 
  let colors = ["blue", "pink", "green", "yellow", "purple"];
  console.log(items);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [selectedBackground, setSelectedBackground] = useState("");
 

  const handleClick = () => {

    if (selectedBackground == "") {
      setError("Please choose a color.")
    }
    if (text.trim() == "") {
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
  const deleteI = (id) => {
    dispatch(deleteItems({ id }));

  }
  const handleEdit = (id) => {
    const selectedNote = items.find((item) => item.id === id);
    dispatch(editedItems({ id, text: selectedNote.text, background: selectedNote.background }));
    setText(selectedNote.text); // Textarea içeriğini güncelle
    setSelectedBackground(selectedNote.background);
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

          </div>
          <div><button onClick={handleClick}>Add</button></div>

        </div>


      </div>

      <ul className='notes-list'>
        {items.map((item) => (
          <li className={item.background} key={item.id} ><span>  <FontAwesomeIcon onClick={() => deleteI(item.id)} icon={faTrashAlt} className='trash' /></span><p className='text'>{item.text}</p><span><FontAwesomeIcon icon={faPenToSquare} onClick={()=>handleEdit(item.id)} className='edit'/></span> </li>
        ))}
      </ul>
    </div>
  )
}

export default TextArea
