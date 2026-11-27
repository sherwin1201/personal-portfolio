"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { work } from "@/data/siteData";
import ProjectLinks from "@/app/work/components/ProjectLinks";
import Card from "@/components/Card";

export default function WorkSection() {
	const [showRelevantOnly, setShowRelevantOnly] = useState(true);
	const firstNonRelevantRef = useRef(null);
	const firstNonRelevant = work.find((item) => !item.relevant);
	const filteredWork = showRelevantOnly ? work.filter((item) => item.relevant) : work;

	useEffect(() => {
		if (!showRelevantOnly) {
			firstNonRelevantRef.current?.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	}, [showRelevantOnly]);

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
					<Card
						as="article"
						key={item.projectName}
						className="mb-4 overflow-hidden !p-0"
					>
						<div
							ref={item === firstNonRelevant ? firstNonRelevantRef : undefined}
							className="flex flex-col md:flex-row"
						>
							<div className="relative aspect-[4/3] w-full shrink-0 self-start bg-gray-800 md:w-3/5">
								{item.cover && (
									<Image
										src={`/${item.cover}`}
										alt={`${item.projectName} cover`}
										fill
										sizes="(max-width: 768px) 100vw, 60vw"
										className="object-cover"
										onLoad={(event) => {
											const { naturalWidth, naturalHeight } = event.currentTarget;
											event.currentTarget.parentElement?.style.setProperty(
												"aspect-ratio",
												`${naturalWidth} / ${naturalHeight}`,
											);
										}}
										onError={(event) => {
											event.currentTarget.style.display = "none";
										}}
									/>
								)}
							</div>
							<div className="flex flex-1 flex-col gap-6 p-5 md:w-2/5 md:justify-between md:p-6">
								<div>
									<h3 className="text-lg font-semibold text-primary text-center">
										{item.projectName}
									</h3>
									<p className="mt-2 text-sm text-gray-400">
										{item.desription}
									</p>
									{(item.links?.reference ??
										item.links?.android ??
										item.links?.ios) && (
										<a
											href={
												item.links.reference ??
												item.links.android ??
												item.links.ios
											}
											target="_blank"
											rel="noopener noreferrer"
											className="mt-4 text-sm font-medium text-primary hover:underline"
										>
											Know More &gt;&gt;
										</a>
									)}
								</div>
								<div className="flex flex-col items-start gap-4">
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
