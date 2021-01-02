import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../actions/toDoActions";

const initialState = {
    toDoItem: []
};
const toDoReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log(action)
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
            // console.log(action.updateItem.todo)
            // console.log(action)
            const updateToDo = { pd: action.updateItem.todo, toDoId: action.updateItem.updateKey };
            const checkout = state.toDoItem.find(checkId => checkId.toDoId == action.updateItem.updateKey);
             checkout = updateToDo;
            const ddr = [...state.toDoItem, change]
            return { ...state, ddr }

        default: return state;
    }
};

export default toDoReducers;
