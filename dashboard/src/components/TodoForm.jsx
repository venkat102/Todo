import { useContext } from "react";
import Button from "./Button";
import {RightBarContext} from "../App"

const TodoForm = () => {
	const {toggleForm} = useContext(RightBarContext)
	return (
		<>
			<div className="bg-white border border-t-2 ">
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
					<div className="relative z-0 w-full mb-5 group">
						<input
							type="text"
							name="title"
							id="title"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=""
							required
						/>
						<label
							htmlFor="title"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Title
						</label>
					</div>
					<Button label={"Submit"}></Button>
				</form>
			</div>
		</>
	);
};

export default TodoForm;
