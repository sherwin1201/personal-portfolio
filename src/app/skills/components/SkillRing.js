export function SkillRing({
	label,
	value = 0,
	icon,
	progressFill = "#2563eb",
}) {
	const radius = 36;
	const stroke = 6;
	const normalizedRadius = radius - stroke / 2;
	const circumference = 2 * Math.PI * normalizedRadius;
	const strokeDashoffset = circumference - value * circumference;
	console.log("SkillRing", { label, value, icon });
	return (
		<div className="flex flex-col items-center relative hover:scale-105 transition-transform">
			<svg height={radius * 2} width={radius * 2} className="block">
				<circle
					stroke="#858585"
					fill="black"
					strokeWidth={stroke}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>
				<circle
					stroke={progressFill}
					fill="transparent"
					strokeWidth={stroke}
					strokeLinecap="round"
					strokeDasharray={`${circumference} ${circumference}`}
					style={{ strokeDashoffset }}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
					transform={`rotate(-90 ${radius} ${radius})`}
				/>
				{icon ? (
					// render the icon inside the SVG so it is aligned to the same coordinate system
					(() => {
						const iconSize = 38; // px
						const x = radius - iconSize / 2;
						const y = radius - iconSize / 2;
						return (
							<image
								href={icon}
								x={x}
								y={y}
								width={iconSize}
								height={iconSize}
								preserveAspectRatio="xMidYMid meet"
							/>
						);
					})()
				) : (
					<text
						x="50%"
						y="50%"
						dominantBaseline="middle"
						textAnchor="middle"
						className="text-sm text-zinc-900 dark:text-zinc-50 font-medium"
					>
						{Math.round(value * 100)}%
					</text>
				)}
			</svg>

			<div className="mt-3 text-center">
				<div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
					{label}
				</div>
			</div>
		</div>
	);
}
