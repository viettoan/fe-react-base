import { combineReducers } from "redux";
import navigationReducers from "./navigationReducers";
import authReducers from "./authReducers";

export default combineReducers({
    navigation: navigationReducers,
    auth: authReducers,
})