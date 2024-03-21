// eslint-disable-next-line react/prop-types
const CountCard = ({ label, count, color }) => {
	return (
		<>
			<div className={`items-center border rounded-lg overflow-hidden shadow ${color + "-400"} hover:scale-110 hover:drop-shadow-xl transition-all duration-300`}>
				<div className={"p-4 text-amber-50 "}>
					<h3 className="text-sm item-center tracking-wider">{label}</h3>
					<p className="text-3xl">{count}</p>
				</div>
			</div>
		</>
	);
};

export default CountCard;
