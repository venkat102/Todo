// eslint-disable-next-line react/prop-types
const CountCard = ({ label, count, color }) => {
	return (
		<>
			<div
				className={`items-center border rounded-lg overflow-hidden shadow hover:scale-110 hover:drop-shadow-xl transition-all duration-1000`}
				style={{ backgroundColor: `${color}` }}
			>
				<div className={"p-4 text-white grid grid-rows-2"}>
					<h3 className="text-md font-semibold item-center tracking-wider">{label}</h3>
					<p className="text-3xl content-end">{count}</p>
				</div>
			</div>
		</>
	);
};

export default CountCard;
