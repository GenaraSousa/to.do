import {
    ADD_TODO,
    TOGGLE_TODO,
    UPDATE_TODO
} from "../action";

var nextId = 1;
const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: nextId++,
                text: action.text,
                done: false
            }
            return [...state, newTodo]

        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.todoId)
                    return { ...todo, done: !todo.done }
                return todo;
            })

        case UPDATE_TODO:
            return state.map(todo => {
                if (todo.id === action.todo.id) {
                    return action.todo;
                }
                return todo;
            })

        default:
            return state;
    }

}

export default todoListReducer;