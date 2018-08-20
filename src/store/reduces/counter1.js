import {ADD1, MINUS1} from '../action-types';

let initState = {num: 0};

export default function reducers(state=initState, action){
    switch(action.type){
        case ADD1:
            return {num: state.num + 1};
        case MINUS1:
            return {num: state.num - 1};
        default:
            return state;        
    }
}