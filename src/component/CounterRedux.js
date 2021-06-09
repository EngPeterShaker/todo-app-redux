import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterRedux = () => {
	const dispatch = useDispatch();
	const counterReducer = useSelector((state) => state.counterReducer);
    
    const {counter} = counterReducer
	console.log(`counter`, counter);
	return (
		<div>
			<button onClick={() => dispatch({ type: "increment" })}>increment</button>
			<button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
			{counter}
		</div>
	);
};

export default CounterRedux;
