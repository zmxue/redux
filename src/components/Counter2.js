import React,{Component} from 'react';
import actions from '../store/actions/counter2';
import {connect} from 'react-redux';

class Counter2 extends Component{
	render(){
		return(
			<div>
				<p>{this.props.num}</p>
				<button onClick={this.props.add2} id="addBtn">+</button>
				<button onClick={this.props.minus2} id="minusBtn">-</button>
			</div>
		)
	}
}
let mapStateToProps = (state) => state.counter2;
export default connect(mapStateToProps, actions)(Counter2);
