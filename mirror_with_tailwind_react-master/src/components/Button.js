function Button(props){
    return(
        <div className={props.styles}>
            <button className={props.myBorder} onClick={props.myClick} >{props.name}</button>
        </div>
    )
}

export default Button;