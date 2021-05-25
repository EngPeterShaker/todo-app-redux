export const addTodoAction = (text) => ({
	type: "ADD_TODO",
	payload: {
		text,
	},
});
