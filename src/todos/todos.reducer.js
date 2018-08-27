import { ADD_TODO } from './todos.actions';

const initialState = {
  todoItems: [
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
    case ADD_TODO: {
      console.log(action.payload.todo);
      return { ...state, todoItems: [...state.todoItems, action.payload.todo] };
    }
    default:
      return state;
  }
};
