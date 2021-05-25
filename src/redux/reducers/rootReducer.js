const initialState = {
	list: [],
};
export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_TODO":
			console.log(`action.payload`, action);
			// return { ...state, list: [action.payload.text] };
			return { ...state, list: [...state.list, action.payload.text] };

		// break;

		default:
			return state;
	}
}
