import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodoAction, getStaticTodos } from "../redux/actions";
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

		addTodoAction(this.state.input);
		this.setState({ input: "" });
	};
	getStaticTodosFn = () => {
		const { getStaticTodos } = this.props;

		getStaticTodos();
	};
	render() {
		return (
			<div>
				<input
					onChange={(e) => this.updateInput(e.target.value)}
					value={this.state.input}
				/>
				<button onClick={this.handleAddTodo}>add todo</button>
				<button onClick={this.getStaticTodosFn}>get all todos</button>
			</div>
		);
	}
}
// const mapDispatchToProps = (dispatch) => ({
// 	addTodo: () => dispatch(addTodo),
// });
// connect(null, { addTodo })
const connectedComponent = connect(null, { addTodoAction, getStaticTodos })(
	AddTodoComnponent
);
export default connectedComponent;
