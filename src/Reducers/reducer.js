import { ADD_TODO, CHANGE_STATUS } from "../Constant/index";

const initialTodo = {
  todos: [],
};

const addTodoReducer = (state = initialTodo, action) => {
  switch (action.type) {
    case ADD_TODO: {
      if (action.text.trim().length > 0) {
        return {
          todos: [
            ...state.todos,
            {
              text: action.text.trim(),
              key: Math.random().toString(),
              check: false,
            },
          ],
        };
      } else {
        alert("List can't be empty");
      }
    }
    case CHANGE_STATUS: {
      const AllList = state.todos.map((val) => {
        if (val.key == action.key) {
          return {
            ...val,
            check: !val.check,
          };
        } else {
          return {
            ...val,
          };
        }
      });
      return {
        todos: AllList,
      };
    }
    default:
      return state;
  }
};

export default addTodoReducer;
