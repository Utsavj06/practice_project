const initialState = {
    location:''
}
 
 const SearchReducer = (state=initialState , action) => {
     switch (action.type){
         case "Get_Location": {
            return{
                ...state,...action.payload.Data
            }
         }
         default : return state;
     }
 }
 
 export default SearchReducer ;