export const mirrorName = (name) =>{
    return {
        type : "mirror",
        payload : name
    }
}

export const resetName = () => {
    return {
        type:"reset"
    }
}