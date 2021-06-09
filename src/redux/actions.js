import axios from "axios";
export const addTodoAction = (id, text) => ({
	type: "ADD_TODO",
	payload: {
		id,
		text,
	},
});

export const toggleTodo = (id) => ({
	type: "TOGGLE_TODO",
	payload: { id },
});

export const getStaticTodos = () => (dispatch) => {
	axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
		console.log(`respnse`, response);
		dispatch(getStaticTodosSuccess(response.data));
	});
};
export const getStaticTodosSuccess = (data) => ({
	type: "GET_STATIC_TODOS_SUCCESS",
	payload: { data },
});