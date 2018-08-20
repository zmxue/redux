import reducers from './reduces';
import {createStore} from 'redux';
let store = createStore(reducers);
export default store;