// eslint-disable-next-line react/prop-types
const SideBarItem = ({label, icon}) => {
	return (
		<>
			<a
				href="#"
				className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
			>
				{icon}
				<span className="ms-3">{label}</span>
			</a>
		</>
	);
};

export default SideBarItem;
