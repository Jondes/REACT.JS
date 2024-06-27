import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material'; 

const CreateArea = (props) => {

const [note, setNote]= useState({
    title: "",
    content: ""
});
function handleChange (event) {
    const { name, value} = event.target;
    
    setNote(prevNote => {
        return { 
            ...prevNote,
            [name]: value
        };
    });
}
function submitNote(event) {
    props.onAdd(note);
     setNote({
        title : "",
        content : ""
    });
    event.preventDefault();
}

  return (
    <div>
      <form>
        <input 
        name='title' 
        onChange={handleChange}
        value={note.title} 
        placeholder='Title'/>
        <textarea name='content' rows="3" 
        placeholder='Take a note...'/>

        <textarea
        name='content'
        rows="3"
        onChange={handleChange}
        value={note.content}
        placeholder='Take a note'
        />

        <Fab onClick={submitNote}>
            <AddIcon />
        </Fab>
      </form>
    </div>
  )
}

export default CreateArea
