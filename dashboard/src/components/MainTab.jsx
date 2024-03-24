/* eslint-disable react/prop-types */
import Button from "./Button";
import ListItem from "./ListItem";
import { RightBarContext } from "../pages/MainPage";
import { useContext } from "react";


const MainTab = ({status, todo}) => {
	const { toggleForm } = useContext(RightBarContext);
	return (
		<>
			<div className="top-28 flex-grow">
				<div className="flex justify-end my-5 mx-8">
					<Button label="Add Todo" click={toggleForm}></Button>
				</div>

				<div className="bg-white shadow-lg mx-8">
					<div className="  overflow-hidden">
						<ul className="divide-y divide-gray-200">
							{ todo?.map((row)=><ListItem status={status} todoItem={row} key={row.name} />) }

						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainTab;
