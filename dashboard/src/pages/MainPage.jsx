import { useFrappeGetDocList } from "frappe-react-sdk";
import React, { useState, createContext } from "react";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import MainTab from "../components/MainTab";
import TodoForm from "../components/TodoForm";
import { Toaster, toast } from "sonner";

export const RightBarContext = createContext(true);

const MainPage = () => {
	let statusMap = {};
	const [formId, setFormId] = useState({});
	const [formToggle, setFormToggle] = useState(false);

	const toggleForm = () => {
		setFormToggle(!formToggle);
	};

	const updateStatus = (statusList) => {
		let objectMap = {
			totalTasks: {
				title: "Total Tasks",
				color: "#38bdf8",
			},
		};
		statusList?.forEach((element) => {
			objectMap[element.name] = {
				title: element.title,
				color: element.color,
			};
		});
		statusMap = objectMap;
	};

	const statusList = useFrappeGetDocList("Todo Status", {
		/** Fields to be fetched - Optional */
		fields: ["name", "title", "color", "order_value"],
		/** Filters to be applied - SQL AND operation */
		filters: [],
		/** Filters to be applied - SQL OR operation */
		orFilters: [],
		/** Fetch from nth document in filtered and sorted list. Used for pagination  */
		limit_start: 0,
		/** Number of documents to be fetched. Default is 20  */
		limit: 20,
		/** Sort results by field and order  */
		orderBy: {
			field: "order_value",
			order: "",
		},
		/** Fetch documents as a dictionary */
		asDict: true,
	});

	if (!statusList.error) updateStatus(statusList.data);

	const todoList = useFrappeGetDocList("My Todo", {
		/** Fields to be fetched - Optional */
		fields: ["name", "title", "description", "status"],
		/** Filters to be applied - SQL AND operation */
		filters: [],
		/** Filters to be applied - SQL OR operation */
		orFilters: [],
		/** Fetch from nth document in filtered and sorted list. Used for pagination  */
		limit_start: 0,
		/** Number of documents to be fetched. Default is 20  */
		limit: 20,
		/** Sort results by field and order  */
		orderBy: {
			field: "modified",
			order: "desc",
		},
		/** Fetch documents as a dictionary */
		asDict: true,
	});


	const [mutateList, mutateStatus] = [todoList.mutate, statusList.mutate]

	return (
		<React.Fragment>
			<Toaster richColors>
				{(statusList.error || todoList.error) &&
					toast.error("Something went wrong")}
			</Toaster>
			<Header status={statusList.data} />
			<RightBarContext.Provider value={{ formToggle, toggleForm, formId, setFormId, mutateList, mutateStatus}}>
				<div className="flex">
					<LeftBar />
					<MainTab status={statusMap} todo={todoList.data} />
					<TodoForm status={statusList.data} statusNameMap={statusMap} />
				</div>
			</RightBarContext.Provider>
		</React.Fragment>
	);
};

export default MainPage;
