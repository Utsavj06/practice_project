import "./Button.css"

function Button(props){
    return(
        <div className="button1">
            <button className={props.myBorder} onClick={props.myClick}>{props.name}</button>
        </div>
    )
}

export default Button;