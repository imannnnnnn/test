import React from "react";
import Note from "./Note";
import notes from "../notes";

/*
1- .map should be within <div></div>
2- input of map can have the same name of array
3- key should be included as ID in array
4- array should directly come from source array file not the function input
5- don't forget to export the source array file

6-when using a props in the destination, inputs are as blahblah = {blahblah}

        <Note
        key = {notes.key}
        title = {notes.title}
        content = {notes.content}
        />

7- all blahblah = {blahblah} will be accepted by a single "props" input in the main function of prop

        function Note(props) {
            return (<h1>{props.title}</h1> ....

and then pointed out by {props.title} {props.content}  ...

8- arrays in the source file are defined as:
 const  arrayName =[{id:1 , title:JSCode, content: "This is a comment"},
                    {    },
                    {    }]
*/


function Card(){
    return(
        <div>
        {notes.map(notes => {return(
        <Note
        key = {notes.key}
        title = {notes.title}
        content = {notes.content}
    /> )})
    }
        </div>
    )
}
export default Card;