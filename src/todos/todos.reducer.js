import { ADD_TODO, DELETE_TODO, TOGGLE_VISIBILITY_TODO } from './todos.actions';
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
    const { type, payload } = action;

    switch (type) {
        case ADD_TODO: {
            const { todoItems } = state;
            return {
                ...state,
                key: payload.todo.key,
                todoItems: [...todoItems, payload.todo]
            };
        }
        case DELETE_TODO: {
            const { todoItems } = state;
            return {
                ...state,
                todoItems: _.dropRight(todoItems, 1)
            };
        }
        case TOGGLE_VISIBILITY_TODO: {
            const { todoItems } = state;
            const { key } = payload;
            const copy = todoItems;
            copy[key - 1].done = !copy[key - 1].done;

            return {
                ...state,
                todoItems: [...copy]
            };
        }
        default:
            return state;
    }
};
