import React, { useState } from 'react';
import uuid from "react-uuid";
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';
import Home from "./Home"
import Todo from "./Todo"
import NoteFile from "./NoteFile"
import Search from "./Search"
import {Switch, Route} from "react-router-dom"

function App() {

  const [notes, setNotes] = useState([
    // localStorage.notes ? JSON.parse(localStorage.notes) : []
  ])
  const [activeNote, setActiveNote] = useState(false)

  // useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(notes));
  // }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: " ",
      body: " ",
      lastModified: Date.now()
    }

    setNotes([newNote, ...notes])
    setActiveNote(newNote.id)
  }

  const onDeleteNote = (noteid) => {
    setNotes(notes.filter((note) => note.id !== noteid))
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === updatedNote.id) {
       return updatedNote;
      }
      return note;
    })
    setNotes(updatedNotesArray);
  }

  const getActiveNote = () => {
    return notes.find(({id}) => id === activeNote)
  }

  return (
    <div className="App">

    <Home />

    <NoteFile />

    <Todo />

    <Search />

    <Sidebar 
    notes={notes} 
    onAddNote={onAddNote} 
    onDeleteNote={onDeleteNote} 
    activeNote={activeNote} 
    setActiveNote={setActiveNote} 
    />

    <Main 
    activeNote={getActiveNote()} 
    onUpdateNote={onUpdateNote}
    />

    </div>

  );
}

export default App;
