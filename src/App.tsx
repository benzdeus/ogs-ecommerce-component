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
    <Input max={2} width={1} borderColor="#83AEFF" onChange={handleOnChange} size={"big"} background={"success"} />
    
  </div>;
}

export default App;
