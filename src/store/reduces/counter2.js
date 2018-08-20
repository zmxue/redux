import {ADD2, MINUS2} from '../action-types';

let initState = {num: 0};

export default function reducers(state=initState, action){
    switch(action.type){
        case ADD2:
            return {num: state.num + 1};
        case MINUS2:
            return {num: state.num -1};
        default:
            return state;        
    }
}