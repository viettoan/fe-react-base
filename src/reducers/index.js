import { combineReducers } from "redux";
import navigationReducers from "./navigationReducers";

export default combineReducers({
    navigation: navigationReducers,
})