import { FrappeProvider } from "frappe-react-sdk";
import "./App.css";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import MainTab from "./components/MainTab";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";


export const RightBarContext = React.createContext(false);

function App() {
	const [formToggle, setFormToggle] = useState(false)

	const toggleForm = ()=>{
		setFormToggle(!formToggle)
	}

	return (
		<div className="App">
			<FrappeProvider socketPort="9003">
				<Header></Header>
				<RightBarContext.Provider value={{formToggle, toggleForm}}>

				<div className="flex">
				{/* <div className="grid md:grid-cols-12 gap-4"> */}
					<LeftBar></LeftBar>
					<MainTab></MainTab>
					{ formToggle && <TodoForm></TodoForm>}
				</div>
				</RightBarContext.Provider>
			</FrappeProvider>
		</div>
	);
}

export default App;
