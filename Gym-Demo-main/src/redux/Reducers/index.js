import SearchReducer from "./SearchReducer";
import SearchLocation from "./SearchLocation"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    SearchReducer,
    SearchLocation
})

export default rootReducer;