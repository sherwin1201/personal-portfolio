export default function Card({
	as: Component = "div",
	children,
	className = "",
}) {
	return (
		<Component
			className={`rounded-lg bg-background p-4 shadow-[0_0_5px_rgba(0,0,0,0.35)] dark:shadow-[0_0_12px_rgba(255,255,255,0.12)] ${className}`}
		>
			{children}
		</Component>
	);
}
