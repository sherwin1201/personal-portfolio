"use client";

import { useState } from "react";
import { work } from "@/data/siteData";
import ProjectLinks from "@/app/work/components/ProjectLinks";
import ProjectTags from "@/app/work/components/ProjectTags";
import Card from "@/components/Card";

export default function WorkSection() {
	const [showRelevantOnly, setShowRelevantOnly] = useState(true);
	const filteredWork = showRelevantOnly ? work.filter((item) => item.relevant) : work;

	return (
		<div className="flex flex-col mx-auto max-w-4xl px-6 py-12">
			<h1 className="text-2xl text-center font-semibold">
				Highlights of my work
			</h1>

			<div className="flex flex-row gap-2 self-end border border-gray-700 p-1 rounded-lg my-4">
				<button
					onClick={() => setShowRelevantOnly(true)}
					className={`text-sm px-3 py-1 rounded-md transition-colors ${
						showRelevantOnly ? "bg-primary text-white" : "text-gray-400"
					}`}
				>
					Relevant
				</button>
				<button
					onClick={() => setShowRelevantOnly(false)}
					className={`text-sm px-3 py-1 rounded-md transition-colors ${
						!showRelevantOnly ? "bg-primary text-white" : "text-gray-400"
					}`}
				>
					Show all
				</button>
			</div>

			<div className="flex flex-col gap-6">
				{filteredWork.map((item) => (
					<Card as="article" key={item.projectName} className="mb-4">
						<div className="flex flex-col lg:flex-row items-center gap-8">
							<div className="flex-1">
								<div className="flex justify-start">
									<h3 className="text-lg font-semibold text-primary">
										{item.projectName}
									</h3>
								</div>
								<p className="mt-2 text-sm text-gray-400">{item.desription}</p>
								<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-3 gap-6">
									<ProjectTags tags={item.tags} />
									<div className="flex gap-4">
										<ProjectLinks links={item.links} />
									</div>
								</div>
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}
