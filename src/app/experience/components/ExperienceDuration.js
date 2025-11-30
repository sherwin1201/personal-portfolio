import { useCallback } from "react";
import moment from "moment";

const ExperienceDuration = ({ startDate, endDate }) => {
	const calculateExperience = useCallback(
		(startDate, endDate) => {
			const start = moment(startDate);
			const end = endDate ? moment(endDate) : moment();

			const years = end.diff(start, "years");
			start.add(years, "years");
			const months = end.diff(start, "months");

			return { years, months };
		},
		[startDate, endDate]
	);

	const { years, months } = calculateExperience(startDate, endDate);
	return (
		<p className="text-xs text-gray-400 whitespace-nowrap">
			{`${years ? years + " years " : ""}${months ? months + " months" : ""}`}
		</p>
	);
};

export default ExperienceDuration;
