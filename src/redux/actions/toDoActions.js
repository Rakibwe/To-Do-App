export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addToDo = addToDoItem => {
    return { type: ADD_TODO, addToDoItem }
}

export let removeToDo = id => {
    return { type: REMOVE_TODO, id }
}