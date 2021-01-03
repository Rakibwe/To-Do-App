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
            //  first try----->
            // newToDo = [...state];
            // let index = -1;
            // for (let i = 0; i < newToDo.length; i++) {
            //     index++;
            //     if (newToDo[i].toDoId == action.updateItem.updateKey) {
            //         break;
            //     }

            // }
            // if (index != -1) {
            //     newToDo[index] = action.updateItem
            // }

            // second try ------->
            // const updateToDo = { pd: action.updateItem.todo, toDoId: action.updateItem.updateKey };
            // const checkout = state.toDoItem.find(checkId => checkId.toDoId == action.updateItem.updateKey);
            //  const change = checkout = updateToDo;
            // const item = [...state.toDoItem, change]
            //  newToDos = [...state,item];

            //   third try ----->
            const checkout = state.toDoItem.find(checkId => checkId.toDoId == action.updateItem.updateKey);
            const data = state.toDoItem[checkout.toDoId] = action.updateItem
            const update = [...state, data]
            return { ...state, update };
        default: return state;
    }
};

export default toDoReducers;
