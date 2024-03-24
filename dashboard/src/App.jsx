import { FrappeProvider } from "frappe-react-sdk";
import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
	return (
		<div className="App">
			<FrappeProvider
				socketPort={import.meta.env.VITE_SOCKET_PORT}
				siteName={import.meta.env.VITE_SITE_PATH}
			>
				<MainPage />
			</FrappeProvider>
		</div>
	);
}

export default App;
