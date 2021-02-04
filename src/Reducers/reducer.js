import { ADD_TODO, CHANGE_STATUS } from "../Constant/index";

const initialTodo = {
  todos: [
    { text: "abc", key: 1, check: false },
    { text: "xyz", key: 2, check: true },
    { text: "mno", key: 3, check: true },
    { text: "rst", key: 4, check: false },
  ],
};

const addTodoReducer = (state = initialTodo, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todos: [
          ...state.todos,
          { text: action.text, key: Math.random().toString(), check: false },
        ],
      };
    }
    case CHANGE_STATUS: {
      const filterList = state.todos.map((val) => {
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
        todos: filterList,
      };
    }

    default:
      return state;
  }
};

export default addTodoReducer;
