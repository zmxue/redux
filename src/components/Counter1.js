import React,{Component} from 'react';
import actions from '../store/actions/counter1'
import {connect} from 'react-redux';

class Counter1 extends Component{
	render(){
		return(
			<div>
				<p>{this.props.num}</p>
				<button onClick={this.props.add1} id="addBtn">+</button>
				<button onClick={this.props.minus1} id="minusBtn">-</button>
				<button onClick={this.props.thunk1} id="addBtn">thunk1</button>
				<button onClick={this.props.promise1} id="minusBtn">promise1</button>
				<button onClick={this.props.payloadPromise1} id="minusBtn">payloadPromise1</button>
			</div>
		)
	}
}
let mapStateToProps=(state) => state.counter1
export default connect(mapStateToProps,actions)(Counter1);
