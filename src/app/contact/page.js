import { contact } from "../../data/siteData";

export default function ContactPage() {
	return (
		<main>
			<div>
				<h1 className="text-2xl font-semibold mb-3">Contact</h1>
				<p className="text-zinc-700 dark:text-zinc-300">
					If you'd like to reach out, send an email:
				</p>
				<div className="mt-3">
					<a
						href={`mailto:${contact?.email ?? "you@example.com"}`}
						className="inline-block rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-90"
					>
						Email me
					</a>
				</div>
			</div>
		</main>
	);
}
