import { INCR_VAL, DECR_VAL } from './actionTypes'

export function incrVal(){
    return( 
        { 
            type: INCR_VAL,
         }
    );
};

export function decrVal(){
    return( 
        { 
            type: DECR_VAL,
         }
    );
};
