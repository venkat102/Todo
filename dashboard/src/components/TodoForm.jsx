import { useContext } from "react";
import Button from "./Button";
import { RightBarContext } from "../App";

const TodoForm = () => {
	const { formToggle, toggleForm } = useContext(RightBarContext);
	return (
		<>
			<div
				className={`bg-white border border-t-2 ${
					formToggle ? "" : "translate-x-full"
				} ${
					formToggle ? "w-100" : "w-0"
				}  transition-all duration-500 transform`}
			>
				<div className="px-8 pt-8" onClick={toggleForm}>
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
				<form className="max-w-md mx-auto p-8">
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
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
							placeholder="Title"
							required
						/>
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
							placeholder="Description"
							required
						/>
					</div>
					<div className="flex mb-5">
						<button
							id="states-button"
							data-dropdown-toggle="dropdown-states"
							className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center w-full text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
							type="button"
						>
							Todo
						</button>
						<div
							id="dropdown-states"
							className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
						>
							<ul
								className="py-2 text-sm text-gray-700"
								aria-labelledby="states-button"
							>
								<li>
									<button
										type="button"
										className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										<div className="inline-flex items-center">
											Todo
										</div>
									</button>
								</li>
								<li>
									<button
										type="button"
										className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										<div className="inline-flex items-center">
											In-Progress
										</div>
									</button>
								</li>
								<li>
									<button
										type="button"
										className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										<div className="inline-flex items-center">
											Ready to Test
										</div>
									</button>
								</li>
								<li>
									<button
										type="button"
										className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										<div className="inline-flex items-center">
											Testing in Progress
										</div>
									</button>
								</li>
								<li>
									<button
										type="button"
										className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										<div className="inline-flex items-center">
											Ready for Deployment
										</div>
									</button>
								</li>
								<li>
									<button
										type="button"
										className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										<div className="inline-flex items-center">
											Deployed
										</div>
									</button>
								</li>
							</ul>
						</div>
					</div>
					<Button label={"Submit"}></Button>
				</form>
			</div>
		</>
	);
};

export default TodoForm;
