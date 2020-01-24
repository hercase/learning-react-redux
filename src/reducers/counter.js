import { INCR_VAL, DECR_VAL } from '../actions/actionTypes';

const initialState = {
    counter : 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCR_VAL:
    return {
        counter: state.counter + 1
      }
    case DECR_VAL:
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
};

export default counterReducer;