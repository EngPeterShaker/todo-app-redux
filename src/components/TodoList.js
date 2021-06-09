import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";
function TodoList(props) {
	console.log(`props`, props);
	const { list = [] } = props;

	const handleToggleAction = (id) => {
		// dispatch action
		console.log(`handleToggleAction id`, id);
		toggleTodo(id);
	};

	return (
		<div>
			{props.list?.length >0 && props.list.map((item) => (
				<p onClick={() => handleToggleAction(item.id)} key={item.id}>
					{item.text}
				</p>
			))}
		</div>
	);
}

const mapStateToProps = (state) => ({
	list: state.list,
});

// const mapDispatchToProps = (dispatch) => {
// 	return { toggleTodo: () => dispatch({ toggleTodo }) };
// };
export default connect(mapStateToProps, { toggleTodo })(TodoList);
