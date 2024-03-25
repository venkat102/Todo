/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { RightBarContext } from "../pages/MainPage";
import Button from "./Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	useFrappeCreateDoc,
	useFrappeGetDoc,
	useFrappeUpdateDoc,
} from "frappe-react-sdk";
import { toast } from "sonner";
// import { DevTool } from "@hookform/devtools";

const TodoForm = ({ status, statusNameMap }) => {
	const {
		formToggle,
		toggleForm,
		formId,
		setFormId,
		mutateList,
		mutateStatus,
	} = useContext(RightBarContext);
	const [dropdown, setDropdown] = useState(0);
	const { createDoc } = useFrappeCreateDoc();
	const { updateDoc } = useFrappeUpdateDoc();

	const schema = yup.object().shape({
		title: yup.string().required("Give a Title"),
		description: yup.string().required("Describe what you are doing"),
		status: yup.string().required("What is your current state"),
	});

	const orderedStatus = {};
	status?.forEach((element) => {
		orderedStatus[element.order_value] = {
			title: element.title,
			count: 0,
			color: element.color,
			name: element.name,
		};
	});

	// let defaultValues = {
	// 	title: "",
	// 	description: "",
	// 	status: orderedStatus[1]?.name,
	// };
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		setValue,
	} = useForm({
		resolver: yupResolver(schema),
	});

	// const todoData = useFrappeGetDoc("My Todo", formId);
	if (formId) {
		setValue("title", formId?.title);
		setValue("description", formId?.description);
		setValue("status", formId?.status);
		// defaultValues = {
		// 	title: todoData?.data?.title,
		// 	description: todoData?.data?.description,
		// 	status: todoData?.data?.status,
		// };
	} else{
		setValue("title", "");
		setValue("description", "");
		setValue("status", orderedStatus[1]?.name);
		console.log(getValues(), orderedStatus[1]?.name);
	}
	// console.log(defaultValues);

	const updateStatus = (value) => setValue("status", value);

	const onSubmit = handleSubmit((data) => {
		if (!formId) {
			createDoc("My Todo", { ...data }).then((res) => {
				if (res.exc) {
					toast.error("Unable to add data");
					return;
				}
				toast.success("Todo Added!");
				closeForm();
			});
		} else{
			updateDoc("My Todo", formId?.name, { ...data }).then((res) => {
				if (res.exc) {
					toast.error("Unable to update data");
					return;
				}
				toast.success("Todo Updated!");
				closeForm();
			});
		}
	});
	const closeForm = () => {
		mutateList();
		mutateStatus();
		setValue("title", "");
		setValue("description", "");
		setValue("status", "");
		setFormId({});
		toggleForm();
	};

	return (
		<>
			<div
				className={`bg-white border border-t-2 ${
					formToggle ? "" : "translate-x-full"
				} ${
					formToggle ? "w-100" : "w-0"
				}  transition-all duration-500 transform`}
			>
				{/* <div className={`${formToggle ? "" : "hidden"}`}> */}
				{formToggle && (
					<div className={`${formToggle ? "" : "hidden"}`}>
						<div className="px-8 pt-8" onClick={closeForm}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 12 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6 rotate-180"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
								/>
							</svg>
						</div>
						<form
							className="max-w-md mx-auto p-8"
							onSubmit={(e) => {
								e.preventDefault();
								onSubmit();
							}}
							noValidate
						>
							<div className="mb-5">
								<label
									htmlFor="title"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Title
								</label>
								<input
									type="Text"
									id="title"
									placeholder="Do Something"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
									{...register("title")}
								/>
								<p className="text-sm text-red-400">{errors.title?.message}</p>
							</div>
							<div className="mb-5">
								<label
									htmlFor="description"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Description
								</label>
								<textarea
									// type="Text"
									id="description"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
									placeholder="Elaborate what you are doing"
									{...register("description")}
								/>
								<p className="text-sm text-red-400">
									{errors.description?.message}
								</p>
							</div>
							<div className="flex flex-col mb-5">
								<label
									htmlFor="status-button"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Status
								</label>
								<button
									id="status-button"
									data-dropdown-toggle="dropdown-states"
									className="flex-shrink-0 z-10 items-center py-2.5 px-4 text-sm font-medium text-center w-full text-white rounded-lg transition-all duration-1000"
									style={{
										backgroundColor: statusNameMap[getValues("status")]?.color,
									}}
									type="button"
									onClick={(e) => {
										e.preventDefault();
										setDropdown(!dropdown);
									}}
									{...register("status")}
								>
									{statusNameMap[getValues("status")]?.title}
								</button>
								<p className="text-sm text-red-400">{errors.status?.message}</p>
								<div
									id="dropdown-states"
									className={`z-50 ${
										dropdown ? "" : "hidden"
									} bg-white divide-x shadow-lg divide-gray-100 rounded-lg w-44`}
								>
									<ul
										className="py-2 text-sm text-gray-700"
										aria-labelledby="states-button"
									>
										{Object.keys(orderedStatus).map((element) => (
											<li key={orderedStatus[element]?.name}>
												<button
													type="button"
													className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
													onClick={(e) => {
														e.preventDefault();
														setDropdown(!dropdown);
														updateStatus(orderedStatus[element]?.name);
														// setValue("status", orderedStatus[element]?.name);
													}}
												>
													<div className="inline-flex items-center">
														{orderedStatus[element]?.title}
													</div>
												</button>
											</li>
										))}
									</ul>
								</div>
							</div>
							<Button label={"Submit"}></Button>
						</form>
					</div>
				)}
				{/* <DevTool control={control} /> */}
			</div>
		</>
	);
};

export default TodoForm;
