import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from "./reducers/rootReducer";

const middlewares = applyMiddleware(thunkMiddleware, logger);
export default createStore(rootReducer, middlewares);
