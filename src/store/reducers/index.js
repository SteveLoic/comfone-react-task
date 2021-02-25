import { combineReducers } from "redux";

import addTaskReducer from "./taskreducer/addTaskReducer";

export default combineReducers({
  addreducer: addTaskReducer,
});
