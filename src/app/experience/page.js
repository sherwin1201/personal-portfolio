import Image from "next/image";
import { experience } from "../../data/siteData";
import ExperienceDuration from "./components/ExperienceDuration";
import ExperienceTimeline from "./components/ExperienceTimeline";

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
						className="absolute left-2 top-0 bottom-0 w-px bg-gray-700"
						aria-hidden
					/>
					<div className="flex flex-col gap-6">
						{sortedExperience.map((e) => {
							return (
								<div key={e.company} className="flex items-start gap-4">
									{/* checkpoint column (outside main content) */}
									<div className="flex justify-center flex-shrink-0">
										<span className="relative z-10 inline-flex items-center justify-center w-4 h-4 rounded-full bg-white dark:bg-black border border-primary">
											<span className="w-2 h-2 rounded-full bg-primary" />
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

									<section className="flex-1 mb-0 rounded-lg border border-gray-700 p-4">
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
									</section>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</main>
	);
}
