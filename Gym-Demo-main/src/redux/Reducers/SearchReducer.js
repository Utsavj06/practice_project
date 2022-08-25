const initialState = {
    name:''
}
 
 const SearchReducer = (state=initialState , action) => {
     switch (action.type){
         case "Get_Gym" : {
            return{
            ...state,...action.payload.Data
         }}
         default : return state;
     }
 }
 
 export default SearchReducer ;