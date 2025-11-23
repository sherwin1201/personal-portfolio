"use client";

import { useState } from "react";
import { skills } from "../../data/siteData";
import { SkillRing } from "./components/SkillRing";
import { SKILL_GROUPS } from "@/constants";

export default function SkillsPage() {
	const [groupBy, setGroupBy] = useState("category");

	const groupedSkills = skills.reduce((groups, skill) => {
		return {
			...groups,
			[skill.category]: [...(groups[skill.category] || []), skill],
		};
	}, {});

	return (
		<main>
			<div className="mx-auto max-w-4xl px-6 py-12">
				<h1 className="text-2xl font-semibold mb-6 text-center">Skills</h1>

				{Object.keys(groupedSkills).map((group) => (
					<section
						key={group}
						className="mb-8 border border-gray-700 p-4 rounded-lg"
					>
						<h2 className="text-lg font-medium mb-4 text-center">
							{SKILL_GROUPS[group]}
						</h2>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
							{groupedSkills[group].map((s) => (
								<div
									key={s.skill}
									className="flex items-center justify-center p-2"
								>
									<SkillRing
										label={s.skill}
										value={Math.max(0, Math.min(1, s.experience))}
										icon={s.icon}
										progressFill={s.fill}
									/>
								</div>
							))}
						</div>
					</section>
				))}
			</div>
		</main>
	);
}
