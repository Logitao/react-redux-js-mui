export const ADD_TODO = '@@TODOS/ADD_TODO';
export const SET_VISIBILITY_TODO = '@@TODOS/SET_VISIBILITY_TODO';
export const DELETE_TODO = '@@TODOS/DELETE_TODO';

/**
 *
 * @export
 * @param {Object} todo
 * @param {string} todo.label
 * @param {boolean} todo.done
 *
 */
export const addTodo = todo => ({
  type: ADD_TODO,
  payload: { todo }
});

export const deleteTodo = key => ({
  type: DELETE_TODO,
  payload: { key }
});

export const setVisibilityTodo = (key, visible) => ({
  type: SET_VISIBILITY_TODO,
  payload: { key, visible }
});
