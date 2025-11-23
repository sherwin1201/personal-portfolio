export const QuickStat = ({ stat, label }) => {
	return (
		<div className="flex flex-col items:center md:items-end">
			<div className="text-3xl font-extrabold text-primary">{stat}</div>
			<div className="text-sm text-gray-400">{label}</div>
		</div>
	);
};
