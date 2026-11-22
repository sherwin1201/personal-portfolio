"use client";

import { skills } from "@/data/siteData";
import { SkillRing } from "@/app/skills/components/SkillRing";
import { SKILL_GROUPS } from "@/constants";
import Card from "@/components/Card";

export default function SkillsSection() {
	const groupedSkills = skills.reduce((groups, skill) => {
		return {
			...groups,
			[skill.category]: [...(groups[skill.category] || []), skill],
		};
	}, {});

	return (
		<div className="mx-auto max-w-4xl px-6 py-12">
			<h1 className="text-2xl font-semibold mb-6 text-center">
				What I work best with
			</h1>

			{Object.keys(groupedSkills).map((group) => (
				<Card as="section" key={group} className="mb-8">
					<h2 className="text-lg font-semibold mb-4 text-center">
						{SKILL_GROUPS[group]}
					</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
						{groupedSkills[group].map((skill) => (
							<div key={skill.skill} className="flex items-center justify-center p-2">
								<SkillRing
									label={skill.skill}
									value={Math.max(0, Math.min(1, skill.experience))}
									icon={skill.icon}
									progressFill={skill.fill}
								/>
							</div>
						))}
					</div>
				</Card>
			))}
		</div>
	);
}
