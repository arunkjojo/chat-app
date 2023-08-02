import { createStore } from "redux";
import chatAppReducer from "./reducers";

const Store = createStore(chatAppReducer);

export default Store;
