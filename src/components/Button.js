export default function PrimaryButton({
	children,
	onClick,
	type = "primary",
	className = "",
}) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`
                text-primary 
                px-6 py-3 
                rounded-lg 
                font-medium 
                border
                border-gray-700
                transform transition
                hover:bg-primary
                hover:text-white
                hover:scale-105
                duration-200
                ${className}
            `}
		>
			{children}
		</button>
	);
}
