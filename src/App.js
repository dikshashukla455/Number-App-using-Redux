import "./App.css";
import Increment from "./components/Increment";
import Store from "./redux/Store";
import { Provider } from "react-redux";
function App() {
	return (
		<Provider store={Store}>
			<div className="App">
				<Increment />
			</div>
		</Provider>
	);
}

export default App;
