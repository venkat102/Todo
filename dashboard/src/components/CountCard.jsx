// eslint-disable-next-line react/prop-types
const CountCard = ({ label, count, color }) => {
	return (
		<>
			<div className="items-center bg-white border rounded-lg overflow-hidden shadow">
				<div className={"p-4 text-amber-50 " + color}>
					<h3 className="text-sm item-center tracking-wider">{label}</h3>
					<p className="text-3xl">{count}</p>
				</div>
			</div>
		</>
	);
};

export default CountCard;
