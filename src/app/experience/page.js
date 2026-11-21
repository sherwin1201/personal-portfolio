import Image from "next/image";
import { experience } from "../../data/siteData";
import ExperienceDuration from "./components/ExperienceDuration";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Card from "@/components/Card";

function formatDate(dateString) {
	if (!dateString) return null;
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
	});
}

export default function ExperiencePage() {
	// Sort by start date descending (most recent first)
	const sortedExperience = [...experience].sort(
		(a, b) => new Date(b.startDate) - new Date(a.startDate)
	);

	return (
		<main>
			<div className="mx-auto max-w-4xl py-12">
				<h1 className="text-2xl font-semibold mb-6 text-center">
					My professional journey
				</h1>

				<div className="relative">
					{/* Single vertical timeline spanning the whole list */}
					<span
						className="absolute left-5 top-0 bottom-0 w-px bg-gray-700 border"
						aria-hidden
					/>
					<div className="flex flex-col gap-6">
						{sortedExperience.map((e) => {
							return (
								<div key={e.company} className="flex items-start gap-4">
									{/* checkpoint column (outside main content) */}
									<div className="flex justify-center flex-shrink-0">
										<span className="relative border z-10 flex items-center justify-center w-10 h-10 bg-white dark:bg-black rounded-full">
											<Image
												src="/checkpoint.png"
												width={20}
												height={20}
												alt="Checkpoint"
											/>
										</span>
									</div>

									<div className="hidden lg:flex lg:flex-col lg:gap-2 mt-2">
										<ExperienceTimeline
											startDate={e.startDate}
											endDate={e.endDate}
										/>
										<ExperienceDuration
											startDate={e.startDate}
											endDate={e.endDate}
										/>
									</div>

									<Card as="article" className="flex-1 mb-0">
										<div className="flex flex-row justify-between items-start">
											<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
												<div>
													<h3 className="text-lg font-bold text-primary">
														{e.company}
													</h3>
													<p className="text-sm text-gray-400">{e.role}</p>
												</div>
												<div className="flex flex-row items-center gap-2 lg:hidden ">
													<ExperienceTimeline
														startDate={e.startDate}
														endDate={e.endDate}
													/>
												</div>
											</div>

											<a
												href={e.website}
												title="Website"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Image
													src="/website.svg"
													alt="External link icon"
													width={18}
													height={18}
												/>
											</a>
										</div>

										<p className="text-sm text-gray-400 mt-2">{e.summary}</p>

										<div className="mt-2 flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-2">
											<div className="flex flex-row items-center">
												<Image
													src="/location.svg"
													height={16}
													width={16}
													alt="Location icon"
												/>
												<p className="text-xs text-gray-500 whitespace-nowrap ml-2">
													{e.address}
												</p>
											</div>

											<p className="text-xs text-gray-500 border rounded-full px-2 py-1">
												{e.workType}
											</p>
										</div>
									</Card>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</main>
	);
}
