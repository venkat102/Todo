/* eslint-disable react/prop-types */
import { useFrappeGetDocList } from "frappe-react-sdk";
import CountCard from "./CountCard";

const Header = ({ status = [] }) => {
	let statusCountMap = {};
	let statusMap = {
		0: {
			label: "Total Task",
			count: 0,
			color: "#38bdf8",
		},
	};
	status.forEach((element) => {
		statusMap[element.order_value] = {
			label: element.title,
			count: 0,
			color: element.color,
			name: element.name,
		};
	});

	const groupedCount = useFrappeGetDocList("My Todo", {
		/** Fields to be fetched - Optional */
		fields: ["count(name) as count", "status"],
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

		groupBy: "status",
		/** Fetch documents as a dictionary */
		asDict: true,
	});
	groupedCount.data?.forEach((element) => {
		statusCountMap[element.status] = element.count;
	});

	let totalTasks = 0;
	Object.keys(statusMap).forEach((element) => {
		statusMap[element].count = statusCountMap[statusMap[element].name]
			? statusCountMap[statusMap[element].name]
			: 0;
		totalTasks += statusMap[element].count;
	});

	statusMap[0].count = totalTasks;

	return (
		<>
			<nav className="stickey top-0 z-50 w-full bg-white">
				<div className="top-0 left-0 right-0 shadow-lg">
					<div className="grid grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-7 sm:px-8">
						{Object.keys(statusMap).map((element) => (
							<CountCard
								key={statusMap[element]?.name}
								label={statusMap[element]?.label}
								count={statusMap[element]?.count}
								color={statusMap[element]?.color}
							/>
						))}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
