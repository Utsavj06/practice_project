import Button from "./Button";

function NameEntry(props){

    let b;

    const Name = (event) =>{
        var Item = "";
        b=Item.concat(event.target.value);
        props.onAddPost(b);
    }

    const resetName=()=>{
       b="";
       props.onAddPost(b);

    }
    return(
    <div className={`${props.styles} `}>
        <div className="text-2xl lg:text-4xl flex-col space-y-7">
            <div className="flex gap-9">
                <Button myBorder="border-2 w-40 lg:w-60 bg-white rounded-full shadow-lg" myClick={resetName} name={"Reset Name"}/>
                <Button myBorder="border-2 w-36 lg:w-52 bg-white rounded-full shadow-lg" name={"Add Name"}/>
            </div>
            <h2 className="flex justify-center">{props.EnteredName}</h2>
            <input className="w-full lg:h-20" type="text" onChange={Name}/>
        </div>
    </div>
    )
}

export default NameEntry;