import {Consumer} from './context';
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
/**
 * connect实现的是仓库和组件的连接
 * mapStateToProps 是一个函数 把状态映射为一个属性对象
 * mapDispatchToProps 也是一个函数 把dispatch方法映射为一个属性对象
 */
export default function (mapStateToProps,mapDispatchToProps) {
	return function (Com) {
		//在这个组件里实现仓库和组件的连接
		class Proxy extends Component{
			// 将状态转化为属性：赋初始值
			state = mapStateToProps(this.props.store.getState())
			componentDidMount() {
				// 将状态转化为属性：状态值变化后进行组件更新
				this.unsubscribe = this.props.store.subscribe(() => {
					this.setState(mapStateToProps(this.props.store.getState()));
				});
			}
			componentWillUnmount = () => {
				this.unsubscribe();
			}
			
			render() {
				// 将事件对象作为参数传递给组件
				let actions={};
				//如果说mapDispatchToProps是一个函数，执行后得到属性对象
				// 参数形式：(dispach)=>({
				// 	add1(){
				// 		dispach({type: 'ADD1'})
				// 	},
				// 	minus1(){
				// 		dispach({type: 'MINUS1'})
				// 	}
				// })
				if (typeof mapDispatchToProps === 'function') {
					actions = mapDispatchToProps(this.props.store.dispatch);
				} else {
					//如果说mapDispatchToProps是一个对象的话，我们需要手工绑定
					// {
					// 	add1(payload) {
					// 		return {type: ADD1,payload};
					// 	 },
					// 	minus1(payload) {
					// 		return {type: MINUS1,payload};
					// 	}
					// }
					actions = bindActionCreators(mapDispatchToProps,this.props.store.dispatch);
				}
				return <Com {...this.state} {...actions}/>
			}
		}

		return () => (
			<Consumer>
				{
					value => <Proxy store={value.store}/>
				}
			</Consumer>
		);
	}
}