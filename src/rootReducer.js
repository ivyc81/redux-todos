import uuid from 'uuid/v4';

/**
 * todos: [ { id: '',
 *            text:''}
 *          ,  ...]
 * */

const INITIAL_STATE = {
  todoList: []
};

function rootReducer(state = INITIAL_STATE, action) {
  let newTodos;

  if (action.type === "ADD_TODO") {
    let newTodo = { ...action.payload, id: uuid() };
    newTodos = [...state.todoList, newTodo]
    return { todoList: newTodos };
  }

  if (action.type === "REMOVE_TODO") {
    newTodos = state.todoList.filter(t => t.id !== action.payload)
    return { todoList: newTodos };
  }

  return state;
}

export default rootReducer;