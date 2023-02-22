import handleCart from "./handleCart";
import loginDetect from "./loginDetect";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    handleCart,
    loginDetect
})

export default rootReducer;