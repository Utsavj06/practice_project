import "./NameEntry.css";
import "./Display.css";

function Display(props){

    const showClass = ["Component"];

    if(props.class===true){
        showClass.push("show")
    }

    return (
        <div className="Component">
        <div className={showClass.join(" ")}>
            <h1>{props.displayName}</h1>
        </div>
        </div>
    )
}

export default Display;