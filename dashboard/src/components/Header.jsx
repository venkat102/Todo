import CountCard from './CountCard'

const Header = () => {
	const ls = [
		{
			label: "Total Task",
			count: 10,
			color: "bg-sky"
		},
		{
			label: "Todo",
			count: 7,
			color: "bg-red"
		},
		{
			label: "In-Progress",
			count: 10,
			color: "bg-green"
		},
		{
			label: "Ready to Test",
			count: 50,
			color: "bg-pink"
		},
		{
			label: "Testing In-Progress",
			count: 40,
			color: "bg-amber"
		},
		{
			label: "Ready for Deployment",
			count: 20,
			color: "bg-purple"
		},
		{
			label: "Deployed",
			count: 10,
			color: "bg-indigo"
		}
	]
	return <>
		<nav className="stickey top-0 z-50 w-full bg-white">
			<div className="top-0 left-0 right-0 shadow-lg">
				<div
					className="grid grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-7 sm:px-8"
				>
					{ls.map((it)=><CountCard label={it.label} count={it.count} color={it.color} key={it.label}></CountCard>)}
				</div>
			</div>
		</nav>
	</>;
}

export default Header;