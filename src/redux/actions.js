import axios from "axios";

export const addTodoAction = (text) => ({
	type: "ADD_TODO",
	payload: {
		text,
	},
});

export const getStaticTodos = () => (dispatch) => {
	axios.get("https://jsonplaceholder.typicode.com/todos").then(({ data }) => {
		// const newData = getUsersWithDisplayName(data, "name");
		dispatch(getStaticTodosSuccess(data));
		console.log(`data`, data);
	});
};

const getStaticTodosSuccess = (data) => {
	return {
		type: "GET_STATIC_TODOS",
		payload: {
			text: data,
		},
	};
};
