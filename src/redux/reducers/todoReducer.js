import { actionTypes } from "./../actions/actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const tempTodos = state.todos.concat(action.payload);
      return { ...state, todos: tempTodos };
    case actionTypes.REMOVE_TODO:
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      return { ...state, todos: filtred };
    case actionTypes.UPDATE_TODO:
      const newTodos = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, todos: newTodos };
    case actionTypes.SET_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
