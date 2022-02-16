import { combineReducers } from "redux";
import { utilsReducer } from "./utils";
import { userReducer } from './user';

export default combineReducers({
    utils: utilsReducer,
    user: userReducer
});