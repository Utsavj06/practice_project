import React , {useState} from 'react';
import Button from "./Button";
import "./NameEntry.css";
import {resetName} from "../action/index"
import {useDispatch} from "react-redux";


function NameEntry(props){

    const dispatch = useDispatch();

    const [name2, setName2] = useState("");

    let Items= "";

    const Name = (event) =>{
        //var Item = "" ;
        //setName2(event.target.value);
        Items=event.target.value;
        props.onAddName(Items);
    }

    const name = () => {
        dispatch(resetName());
        Items=""
    }

    return(
        
    <div className="Component"> 
        <div>
            <div display={false} className="button_flex">
                <Button myBorder="myBorder" name={"Reset Name"} myClick={name} />
            </div>
            <h2 className="diplay_flex">{props.EnteredName}</h2>
            <input type="text" placeholder='Enter Your Name'  onChange={Name}/>
        </div>
    </div>
    )
}

export default NameEntry;