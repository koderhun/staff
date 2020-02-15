import { combineReducers } from "redux";
import personalsReducer from "./personalsReducer";

export default combineReducers({
  personals: personalsReducer
});
