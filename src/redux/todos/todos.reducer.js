import { ADD_TODO } from './todos.actions';

const initialState = {
  todos: [
    {
      label: 'todo1',
      done: false
    },
    {
      label: 'todo2',
      done: false
    },
    {
      label: 'todo3',
      done: true
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload.todo] };
    default:
      return state;
  }
};
