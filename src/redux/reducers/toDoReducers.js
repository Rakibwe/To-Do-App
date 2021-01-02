import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../actions/toDoActions";

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
            return { ...state, toDoItem: updateState };
        case REMOVE_TODO:
            const toDoKey = action.id;
            const remaining = state.toDoItem.filter(item => item.toDoId !== toDoKey)
            return { ...state, toDoItem: remaining };
        case UPDATE_TODO:
            console.log(action)
            // updateToDo = action.toDoName;
            const updateToDo = state.toDoItem.find(checkId => checkId.toDoId == action.updateKey);
            console.log(updateToDo)
            // updateToDo = { pd: action.toDoName };
            // const setValue = [state.toDoItem, updateToDo]
            return { ...state, }

        default: return state;
    }
};

export default toDoReducers;
