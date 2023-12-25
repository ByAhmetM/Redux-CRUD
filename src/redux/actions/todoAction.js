import { actionTypes } from "./actionTypes";

export const addTodo = (payload) => ({
  type: actionTypes.ADD_TODO,
  payload,
});

export const removeTodo = (payload) => ({
  type: actionTypes.REMOVE_TODO,
  payload,
});

export const updateTodo = (payload) => ({
  type: actionTypes.UPDATE_TODO,
  payload,
});

export const setTodos = (payload) => ({
  type: actionTypes.SET_TODOS,
  payload,
});
