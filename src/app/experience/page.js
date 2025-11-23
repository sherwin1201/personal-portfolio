import { experience } from "../../data/siteData";

export default function ExperiencePage() {
	return (
		<main>
			<div>
				<h1 className="text-2xl font-semibold mb-3">Work Experience</h1>
				<div className="flex flex-col gap-4">
					{experience.map((e) => (
						<article
							key={e.company}
							className="rounded-md border border-zinc-100 p-4 dark:border-zinc-800"
						>
							<div className="flex items-baseline justify-between">
								<h3 className="text-lg font-medium">{e.role}</h3>
								<span className="text-sm text-zinc-500">{e.range}</span>
							</div>
							<div className="text-sm text-zinc-600 dark:text-zinc-400">
								{e.company}
							</div>
							<p className="mt-2 text-zinc-700 dark:text-zinc-300">
								{e.summary}
							</p>
						</article>
					))}
				</div>
			</div>
		</main>
	);
}
