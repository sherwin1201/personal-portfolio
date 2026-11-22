import Image from "next/image";
import { experience } from "@/data/siteData";
import ExperienceDuration from "@/app/experience/components/ExperienceDuration";
import ExperienceTimeline from "@/app/experience/components/ExperienceTimeline";
import Card from "@/components/Card";

export default function ExperienceSection() {
	const sortedExperience = [...experience].sort(
		(a, b) => new Date(b.startDate) - new Date(a.startDate)
	);

	return (
		<div className="mx-auto max-w-4xl px-6 py-12">
			<h1 className="text-2xl font-semibold mb-6 text-center">
				My professional journey
			</h1>
			<div className="relative">
				<span className="absolute left-5 top-0 bottom-0 w-px bg-gray-700 border" aria-hidden />
				<div className="flex flex-col gap-6">
					{sortedExperience.map((item) => (
						<div key={item.company} className="flex items-start gap-4">
							<div className="flex justify-center flex-shrink-0">
								<span className="relative border z-10 flex items-center justify-center w-10 h-10 bg-primary dark:bg-black rounded-full">
									<Image src="/checkpoint.svg" width={20} height={20} alt="Checkpoint" />
								</span>
							</div>
							<div className="hidden lg:flex lg:flex-col lg:gap-2 mt-2">
								<ExperienceTimeline startDate={item.startDate} endDate={item.endDate} />
								<ExperienceDuration startDate={item.startDate} endDate={item.endDate} />
							</div>
							<Card as="article" className="flex-1 mb-0">
								<div className="flex flex-row justify-between items-start">
									<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
										<div>
											<h3 className="text-lg font-bold text-primary">{item.company}</h3>
											<p className="text-sm text-gray-400">{item.role}</p>
										</div>
										<div className="flex flex-row items-center gap-2 lg:hidden">
											<ExperienceTimeline startDate={item.startDate} endDate={item.endDate} />
										</div>
									</div>
									<a href={item.website} title="Website" target="_blank" rel="noopener noreferrer">
										<Image src="/website.svg" alt="External link icon" width={18} height={18} />
									</a>
								</div>
								<p className="text-sm text-gray-400 mt-2">{item.summary}</p>
								<div className="mt-2 flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-2">
									<div className="flex flex-row items-center">
										<Image src="/location.svg" height={16} width={16} alt="Location icon" />
										<p className="text-xs text-gray-500 whitespace-nowrap ml-2">{item.address}</p>
									</div>
									<p className="text-xs text-gray-500 border rounded-full px-2 py-1">{item.workType}</p>
								</div>
							</Card>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
