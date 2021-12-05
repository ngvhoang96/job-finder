import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({ clientReducer, shopReducer });

export default rootReducer;
