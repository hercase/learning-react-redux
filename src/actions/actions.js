import { INCR_VAL, DECR_VAL, ADD_POST } from './actionTypes'

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

export function addPost(data){
    return(
        {
            type: ADD_POST,
            payload: data
        }
    )
}
