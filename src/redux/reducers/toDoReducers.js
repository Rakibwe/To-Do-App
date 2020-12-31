import { ADD_TODO, REMOVE_TODO } from "../actions/toDoActions";

const initialState = {
    toDoItem: []
};
const toDoReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newItem = {
                pd: action.addToDoItem.text,
                toDoId: state.toDoItem.length + 1
            };
            const updateState = [...state.toDoItem, newItem]
            return { ...state, toDoItem: updateState }
        case REMOVE_TODO:
            const toDoKey = action.id;
            console.log(toDoKey)
            const remaining = state.toDoItem.filter(list => list.toDoId !== toDoKey)
            return { ...state, toDoItem: remaining }
        default: return state;
    }
};

export default toDoReducers;