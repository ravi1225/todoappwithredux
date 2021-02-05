import { createStore } from "redux";
import addTodoReducer from "../Reducers/reducer";

const store = createStore(addTodoReducer);

export default store;
