import { INCR_VAL, DECR_VAL } from '../actions/actionTypes';

const initialState = {
    contador : 0
};

export function Contador(state = initialState, action) {
  switch (action.type) {
    case INCR_VAL:
    return {
        contador: state.contador + 1
      }
    case DECR_VAL:
      return {
        contador: state.contador - 1
      }
    default:
      return state
  }
}

export default Contador;