import counter1 from './counter1';
import counter2 from './counter2';
import {combineReducers} from 'redux';

export default combineReducers({
    counter1, 
    counter2
})