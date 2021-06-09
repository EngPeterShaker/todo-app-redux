import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
	// counterReducer: counterReducer,
	counterReducer,
});

export default rootReducer;
