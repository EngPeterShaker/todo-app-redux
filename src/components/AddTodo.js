import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addTodoAction, getStaticTodos } from "../redux/";
// redux action

class AddTodoComnponent extends Component {
	constructor(props) {
		super(props);
		console.log(`this.props`, this.props);
		this.state = { input: "" };
	}
	updateInput = (input) => {
		this.setState({ input });
	};

	handleAddTodo = () => {
		// disptach action
		const { addTodoAction } = this.props;
		// const index = itemList.length + 1;

		addTodoAction(uuidv4(), this.state.input);

		this.setState({ input: "" });
	};
	getStaticTodosFn = () => {
		console.log(`props`, this.props);
		this.props.getStaticTodos();
	};
	render() {
		return (
			<div>
				<input
					onChange={(e) => this.updateInput(e.target.value)}
					value={this.state.input}
				/>
				<button onClick={this.handleAddTodo}>add todo</button>
				<button onClick={this.getStaticTodosFn}>get static todos</button>
			</div>
		);
	}
}
// const mapDispatchToProps = (dispatch) => ({
// 	addTodo: () => dispatch(addTodo),
// });
// connect(null, { addTodo })
// const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(AddTodoComnponent);
const connectedComponent = connect(null, { addTodoAction, getStaticTodos })(
	AddTodoComnponent
);
export default connectedComponent;
