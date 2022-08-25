

function Display(props){
    return (
        <div className={props.styles}>
            <h1 className="text-3xl border-2 lg:text-6xl">{props.displayName}</h1>
        </div>
    )
}

export default Display;