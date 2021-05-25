import React from "react";
import { connect } from "react-redux";
function TodoList(props) {
	console.log(`props`, props);
	return (
		<div>
			{props.list.map((item) => {
				return <p key={item}>{item}</p>;
			})}
		</div>
	);
}

const mapStateToProps = (state) => ({
	// console.log(`state`, state);
	list: state.list,
});
export default connect(mapStateToProps)(TodoList);
