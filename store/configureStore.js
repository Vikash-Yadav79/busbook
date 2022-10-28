import { createStore, combineReducers } from 'redux';
import {mainReducer} from './reducer';

const rootReducer = combineReducers(
    { app: mainReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;