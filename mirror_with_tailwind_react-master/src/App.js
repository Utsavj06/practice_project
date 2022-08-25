import React , {useState} from 'react';
import NameEntry from './components/NameEntry';
import Button from './components/Button';
import Display from './components/Display';

function App() {

const [Data, setData]=useState();
const [DisplayData, setDisplayData] = useState("Mirror Name");
const getData =(enteredData) =>{
      setData(enteredData);
}

var myData = "";
const getName =()=>{
  for(let i=Data.length-1 ; i>=0 ;i--){
    myData+=Data[i];
  }
  setDisplayData(myData);
}
  return (
    <div className="lg:flex w-full h-screen">
        <NameEntry styles="bg-red-400 h-2/5 lg:h-screen w-full lg:w-7/12 flex justify-center items-center" EnteredName="Your Name" onAddPost={getData}/>
        <Button styles={"h-1/6 lg:h-screen w-full lg:w-1/5 bg-yellow-200 flex justify-center text-3xl"} myClick={getName} name="Mirror Me"/>
        <Display styles="bg-red-800 h-2/5 lg:h-screen w-screen lg:w-8/12 flex justify-center items-center" displayName={DisplayData} />
    </div>
  );
}

export default App;
