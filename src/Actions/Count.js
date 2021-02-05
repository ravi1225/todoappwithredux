import { ADD_TODO, CHANGE_STATUS } from "../Constant/index";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};
export const changeStatus = (key) => {
  return {
    type: CHANGE_STATUS,
    key,
  };
};
