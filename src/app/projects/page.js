import { projects } from "../../data/siteData";

export default function ProjectsPage() {
	return (
		<main>
			<div>
				<h1 className="text-2xl font-semibold mb-3">Projects</h1>
				<div className="flex flex-col gap-4">
					{projects.map((p) => (
						<article
							key={p.name}
							className="rounded-md border border-zinc-100 p-4 dark:border-zinc-800"
						>
							<div className="flex items-baseline justify-between">
								<h3 className="text-lg font-medium">{p.name}</h3>
								<span className="text-sm text-zinc-500">{p.year}</span>
							</div>
							<p className="mt-2 text-zinc-700 dark:text-zinc-300">
								{p.summary}
							</p>
							{p.link ? (
								<div className="mt-2 text-sm">
									<a href={p.link} className="text-blue-600 hover:underline">
										View project
									</a>
								</div>
							) : null}
						</article>
					))}
				</div>
			</div>
		</main>
	);
}
