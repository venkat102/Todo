import { useContext, useState } from "react";
import { RightBarContext } from "../pages/MainPage";
import { useFrappeDeleteDoc } from "frappe-react-sdk";
import { toast } from "sonner";

/* eslint-disable react/prop-types */
const ListItem = ({ status, todoItem }) => {
	const { formToggle, toggleForm, setFormId, mutateList, mutateStatus } =
		useContext(RightBarContext);
	const [isFocused, setFocus] = useState(false);
	const {deleteDoc} = useFrappeDeleteDoc();

	return (
		<>
			<li
				className="p-4 flex justify-between items-center user-card shadow-md rounded-lg transition-all duration-1000"
				onMouseEnter={() => setFocus(true)}
				onMouseLeave={() => setFocus(false)}
				style={{
					backgroundColor: isFocused
						? `${status[todoItem?.status]?.color}20`
						: "#fff",
				}}
			>
				<div
					className="grid grid-rows-2 grid-flow-col gap-2 cursor-pointer"
					onClick={() => {
						if (!formToggle) {
							toggleForm();
						}
						setFormId(todoItem);
					}}
				>
					<div className="font-bold"> {todoItem?.title}</div>
					<div className="ml-3 font-light">{todoItem?.description}</div>
				</div>

				<div className=" flex items-center p-4">
					<span
						className={`text-lg font-medium px-2.5 py-0.5 rounded  border-2 mx-4`}
						style={{
							color: status[todoItem?.status]?.color,
							borderColor: status[todoItem?.status]?.color,
						}}
					>
						{status[todoItem?.status]?.title}
					</span>

					<button
						className="text-gray-500 hover:text-red-600"
						onClick={() => {
							deleteDoc("My Todo", todoItem?.name).then((res)=>{
								if (res.exc){
									toast.error("Unable to delete Todo")
								}
								toast.success("Todo deleted!")
								mutateList();
								mutateStatus();
							});
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
							/>
						</svg>
					</button>
				</div>
			</li>
		</>
	);
};

export default ListItem;
