export default function PortfolioPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black text-foreground">
			<main className="mx-auto max-w-4xl px-6 py-24 w-full">
				<div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start">
					<div className="md:flex-1">
						<h1 className="text-4xl font-extrabold leading-tight mb-4">
							Hi, I'm Sherwin
						</h1>
						<p className="mb-4 text-zinc-700 dark:text-zinc-300">
							A results-driven Software Engineer specializing in frontend
							technologies like React and JavaScript for cross-platform mobile
							apps, and excels in project leadership and mentorship.
						</p>
					</div>

					<div className="flex-shrink-0">
						<div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-700">
							{/* Replace /avatar.jpg with your photo in the public folder */}
							<img
								src="/avatar.jpg"
								alt="Sherwin profile"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
