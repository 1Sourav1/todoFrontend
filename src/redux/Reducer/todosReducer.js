import * as actionType from "../Action/type"

export const todoReducers = (state = [], action) => {
    switch (action.type) {
        case actionType.ADDNEW_TODO:
            return [...state, action.payload]

        case actionType.GETALL_TODO:
            return action.payload

        case actionType.TOGGLE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
            ))
        case actionType.UPDATE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
            ))

        case actionType.DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id)


        default:
            return state;
    }
}