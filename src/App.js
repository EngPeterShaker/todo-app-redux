import logo from "./logo.svg";
import "./App.css";
// import CounterHooks, { x } from "./component/CounterHooks";
import CounterRedux from "./component/CounterRedux";
//import root reducer

function App() {
	return (
		<div className="App">
			<CounterRedux />
		</div>
	);
}

export default App;
