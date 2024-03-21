import Button from "./Button";
import ListItem from "./ListItem";
import {RightBarContext} from "../App"
import { useContext } from "react";
// eslint-disable-next-line react/prop-types
const MainTab = () => {
	const {toggleForm} = useContext(RightBarContext)
	return (
		<>
			<div className="top-28 flex-grow">
				<div className="flex justify-end my-5 mx-8">
					<Button label="Add Todo" click={toggleForm}></Button>
				</div>

				<div className="bg-white shadow-lg mx-8">
					<div className="  overflow-hidden">
						<ul className="divide-y divide-gray-200">
								<ListItem></ListItem>

								<ListItem></ListItem>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainTab;
