"use client";

import { useState } from "react";
import { work } from "../../data/siteData";
import ProjectLinks from "./components/ProjectLinks";
import ProjectTags from "./components/ProjectTags";
import Card from "@/components/Card";

export default function WorkPage() {
	const [showRelevantOnly, setShowRelevantOnly] = useState(true);

	const filteredWork = showRelevantOnly ? work.filter((w) => w.relevant) : work;

	const handleShowRelavant = () => {
		setShowRelevantOnly((prev) => !prev);
	};

	return (
		<main>
			<div className="flex flex-col mx-auto max-w-4xl px-6 py-12">
				<h1 className="text-2xl text-center font-semibold">
					Highlights of my work
				</h1>

				<div className="flex flex-row gap-2 self-end border border-gray-700 p-1 rounded-lg my-4">
					<button
						onClick={handleShowRelavant}
						className={`text-sm px-3 py-1 rounded-md transition-colors ${
							showRelevantOnly ? "bg-primary text-white" : "text-gray-400"
						}`}
					>
						Relevant
					</button>
					<button
						onClick={handleShowRelavant}
						className={`text-sm px-3 py-1 rounded-md transition-colors ${
							!showRelevantOnly ? "bg-primary text-white" : "text-gray-400"
						}`}
					>
						Show all
					</button>
				</div>

				<div className="flex flex-col gap-6">
					{filteredWork.map((w) => (
						<Card as="article" key={w.projectName} className="mb-4">
							<div className="flex flex-col lg:flex-row items-center gap-8">
								{/* <div className="rounded-lg overflow-hidden">
									{w.cover ? (
										<Image
											src={`/${w.cover}`}
											alt={w.projectName + " cover"}
											height={100}
											width={100}
										/>
									) : (
										<div className="w-full h-full bg-zinc-100 dark:bg-zinc-800" />
									)}
								</div> */}

								<div className="flex-1">
									<div className="flex justify-start">
										<h3 className="text-lg font-semibold text-primary">
											{w.projectName}
										</h3>
									</div>

									<p className="mt-2 text-sm text-gray-400">{w.desription}</p>

									<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-3 gap-6">
										<ProjectTags tags={w.tags} />

										<div className="flex gap-4">
											<ProjectLinks links={w.links} />
										</div>
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</main>
	);
}
