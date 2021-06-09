import React, { useState, useEffect } from "react";

function CounterHooks() {
	// const [state , setState] = useState()
	const [counter, setCounter] = useState(0);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		document.title = `React FEND (${counter})`;
	},[counter]);
   

	return (
		<div>
			<button
				onClick={() => {
					setVisible((ta3meya) => !ta3meya);
				}}
			>
				toggle Visibility
			</button>
			<button
				onClick={() => {
					setCounter((counter) => counter + 1);
				}}
			>
				counter btn
			</button>
			{visible && <p> I'm Visible</p>}
			counter : {counter}
		</div>
	);
}
export const x = 3;
export default CounterHooks;
