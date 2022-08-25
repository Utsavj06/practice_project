import React, { useState } from 'react';
import NameEntry from './components/NameEntry';
import Button from './components/Button';
import Display from './components/Display';
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { mirrorName } from './action/index';

function App() {

 const myName = useSelector((state)=> state.changeName)
 const [Data, setData] = useState("")
 const dispatch = useDispatch();


 const getName1 = (enteredName) => {
   setData(enteredName);
 }

 const getName = () =>{
  dispatch(mirrorName(Data))
 }

 return (
   
    <div className = "Display">
        <NameEntry EnteredName="Your Name" onAddName={getName1}  />
        <Button myBorder="button" myClick={getName} name="Mirror Me"/>
        <Display displayName={myName}  />
    </div>
  );
}

export default App;