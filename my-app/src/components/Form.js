import React from 'react'
import { useState } from 'react';

export default function Form(props) {
const handleConvert = ()=> {
    props.showAlert("Converted to Upper Case","success")
    let newText = text.toUpperCase(); 
    setText(newText);
}
const handleOnChange = (event)=> {
  setText(event.target.value);
  // console.log("typing");
}
const handleClearText = () => {
  setText("");
}
const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container my-5">
  <h1 htmlFor="exampleFormControlTextarea1" className="form-label">Enter text</h1>
  <textarea className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" cols="3" rows="6"></textarea>
  <div className="container my-4">
  <button type="submit" className="btn btn-primary mx-4" onClick={handleConvert}>Convert to Upper</button>
  <button type="submit" className="btn btn-primary" onClick={handleClearText}>Clear Text</button>
  </div>
    <h2 className="my-3">Your Text Summary</h2>
    <p>{text.split(/\S+/).length - 1} Words and {text.length} Characters</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>

    </>
  )
}
