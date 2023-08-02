import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";

const chatAppReducer = combineReducers({
  user: userAuthReducer,
});

export default chatAppReducer;
