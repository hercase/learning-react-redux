import { ADD_POST } from '../actions/actionTypes';

const initialState = [];

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return state.concat([action.payload]);
        default:
            return state;
        }
    }
export default postReducer;