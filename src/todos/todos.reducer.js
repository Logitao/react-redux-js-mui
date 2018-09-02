import { ADD_TODO, DELETE_TODO } from './todos.actions';
import _ from 'lodash';

const initialState = {
    todoItems: [
        {
            key: 1,
            label: 'todo1',
            done: false
        },
        {
            key: 2,
            label: 'todo2',
            done: false
        },
        {
            key: 3,
            label: 'todo3',
            done: true
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                key: action.payload.todo.key,
                todoItems: [...state.todoItems, action.payload.todo]
            };
        }
        case DELETE_TODO: {
            const { todoItems } = state;

            console.log(state);

            return {
                ...state,
                todoItems: _.dropRight(todoItems, 1)
            };
        }
        default:
            return state;
    }
};
