const initialState= "Mirror Name";
//const initialDisplay = "none";

const changeName = (state = initialState , action) => {
    switch(action.type){
        case "mirror" : let mirrorName = "";
                        const abc = action.payload;
                      for(let i=abc.length-1 ; i>=0 ; i--){
                        mirrorName+=abc[i];
                      }
                      return state=mirrorName;
        case "reset" : return state=initialState;              
        default : return state ;
    }
}

export default changeName;

