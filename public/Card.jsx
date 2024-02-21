import React from "react";
import Note from "./Note";
// import notes from "../notes";

function Card(notes){
    {notes.map(notes => {return(      <Note
        key = {notes.key}
        title = {notes.title}
        content = {notes.content}
    /> )})
    }
    }
export default Card;