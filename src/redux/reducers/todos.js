const initialState = {
	list: [],
};
export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_TODO":
			console.log(`action.payload`, action);
			const { text, id } = action.payload;
			// return { ...state, list: [action.payload.text] };
			return {
				...state,
				list: [...state.list, { id, text }],
			};

		case "TOGGLE_TODO":
			console.log(`action.payload TOGGLE_TODO`, action);
			return state;

		case "GET_STATIC_TODOS_SUCCESS":
			console.log(`action`, action);
			return state;

		// return state.map((todo) =>
		// 	todo.id !== action.id
		// 		? todo
		// 		: Object.assign({}, todo, { complete: !todo.complete })
		// );

		// break;

		default:
			return state;
	}
}
