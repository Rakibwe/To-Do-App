export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";


export const addToDo = addToDoItem => {
    return { type: ADD_TODO, addToDoItem }
}

export const removeToDo = id => {
    return { type: REMOVE_TODO, id }
}

export const updateToDoItem = (updateItem) => {
    console.log(updateItem)
    return { type: UPDATE_TODO, updateItem: updateItem }
}