import Image from "next/image";
import { useCallback } from "react";

const ExperienceTimeline = ({ startDate, endDate }) => {
	const formatExperienceDate = useCallback(
		(dateString) => {
			if (!dateString) return null;
			const date = new Date(dateString);
			return date.toLocaleDateString("en-US", {
				year: "numeric",
				month: "short",
			});
		},
		[startDate, endDate]
	);

	const formattedStartDate = formatExperienceDate(startDate);
	const formattedEndDate = endDate ? formatExperienceDate(endDate) : null;

	const dateRange = endDate
		? `${formattedStartDate} — ${formattedEndDate}`
		: `${formattedStartDate} — Present`;

	return (
		<div className="flex flex-row items-center">
			<Image src="/calendar.svg" height={12} width={12} alt="Calendar icon" />
			<span className="text-xs text-gray-400 whitespace-nowrap ml-2">
				{dateRange}
			</span>
		</div>
	);
};

export default ExperienceTimeline;
