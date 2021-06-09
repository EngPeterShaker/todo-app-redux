const initialState = {
	counter: 0,
};

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "increment":
			// break;
			return { ...state, counter: state.counter + 1 };
		case "decrement":
			return { ...state, counter: state.counter - 1 };

		default:
			return {...state};
	}
};

export default counterReducer;
