// eslint-disable-next-line react/prop-types
const Button = ({ label, click }) => {
	return (
		<>
			<button
				className="bg-blue-400 rounded-lg px-6 py-2 text-white hover:bg-[#2563eb] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
				onClick={click}
			>
				{label}
			</button>
		</>
	);
};

export default Button;
