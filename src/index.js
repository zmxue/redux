import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';

import store from './store';
import {Provider} from 'react-redux';

class App extends Component{
    render(){
        return(
            <React.Fragment>
                <Counter1 />
		        <Counter2 />
            </React.Fragment>
        )
    }
}
ReactDOM.render(<Provider store = {store}>
    <App />
</Provider>, window.root);
