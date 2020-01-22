import { INCR_VAL, DECR_VAL } from './actionTypes';

let contador = 0;

export const incrVAL = contador => ({
    type: INCR_VAL,
    payload: {
        value: ++contador
    }
})

export const decrVAL = contador => ({
    type: DECR_VAL,
    payload: {
        value: --contador
    }
})