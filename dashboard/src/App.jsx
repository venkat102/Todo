import "./App.css";
import { FrappeProvider } from "frappe-react-sdk";
function App() {

	return (
		<div className="App">
			<FrappeProvider socketPort="9003">
				
			</FrappeProvider>
		</div>
	);
}

export default App;
