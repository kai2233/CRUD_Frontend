import { combineReducers } from "redux";
import campusesReducer from "./campuses/campuses.reducer"

const rootReducer = combineReducers({
  campuses: campusesReducer
});

export default rootReducer;