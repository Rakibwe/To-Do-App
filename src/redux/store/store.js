import { createStore } from 'redux';
import toDoReducers from '../reducers/toDoReducers';

export const store = createStore(toDoReducers);