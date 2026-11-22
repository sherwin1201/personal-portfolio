"use client";

import PrimaryButton from "@/components/Button";
import { quickStats } from "@/data/siteData";
import Image from "next/image";
import { QuickStat } from "./components/QuickStat";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
	return (
		<main>
			<section id="home" data-section className="min-h-screen flex items-center justify-center text-foreground scroll-mt-0">
				<div className="mx-auto max-w-4xl px-6 py-24">
					<div className="flex flex-col-reverse md:flex-row items-center gap-8 md:items-start">
						<div className="md:flex-1 text-center md:text-left">
							<h1 className="text-6xl font-extrabold leading-tight mb-2">
								Hi, I'm <span className="text-primary">Sherwin</span>
							</h1>
							<h4 className="text-xl leading-tight mb-4 text-gray-500">
								Product Delivery Engineer
							</h4>
							<p className="mb-4 text-zinc-700 dark:text-zinc-300">
								A results-driven Software Engineer specializing in React and
								React Native for cross-platform mobile and web apps, and excels
								in project leadership and mentorship.
							</p>

							{/* Quick stats */}
							<div className="mt-6 flex gap-10 justify-center md:justify-start">
								{quickStats.map((qs) => (
									<QuickStat key={qs.label} stat={qs.stat} label={qs.label} />
								))}
							</div>

							<div className="w-full mt-8 flex justify-center md:justify-start items-center">
								<PrimaryButton
									onClick={() =>
										document
											.getElementById("contact")
											?.scrollIntoView({ behavior: "smooth", block: "start" })
									}
								>
									Get in touch
								</PrimaryButton>
							</div>
						</div>

						<div className="flex-shrink-0 mb-8 md:mb-0">
							<div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-700">
								<Image
									src="/profile.jpg"
									alt="Profile photo"
									className="h-full w-full object-cover"
									width={400}
									height={400}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="skills" data-section className="min-h-screen scroll-mt-0">
				<SkillsSection />
			</section>

			<section id="work" data-section className="min-h-screen scroll-mt-0">
				<WorkSection />
			</section>

			<section id="experience" data-section className="min-h-screen scroll-mt-0">
				<ExperienceSection />
			</section>

			<section id="contact" data-section className="min-h-screen flex items-center scroll-mt-0">
				<ContactSection />
			</section>
		</main>
	);
}
