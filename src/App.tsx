import React from "react";
import "./App.css";
import {Button,Input} from "./lib/index"

function App() {
  const handleOnClick = ()=>{
    alert("test")
  }

  const handleOnChange = (e) =>{
    console.log(e.target.value)
  }
  return <div >
    <Button onClick={handleOnClick} text="test" type="primary"   />
    <Input onChange={handleOnChange} />
    
  </div>;
}

export default App;
