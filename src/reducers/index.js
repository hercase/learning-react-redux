import { combineReducers } from 'redux';
import counterReducer from './counter';
import postReducer from './posts';

export default combineReducers({
    counterReducer,
    postReducer
});