"use client";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const navLinks = [
	{ id: "home", label: "Home" },
	{ id: "skills", label: "Skills" },
	{ id: "work", label: "Work" },
	{ id: "experience", label: "Experience" },
	{ id: "contact", label: "Contact" },
];

export default function Root({ children }) {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const sections = navLinks
			.map(({ id }) => document.getElementById(id))
			.filter(Boolean);

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible[0]) setActiveSection(visible[0].target.id);
			},
			{ rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] }
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	const scrollToSection = (id) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
		setActiveSection(id);
		setDrawerOpen(false);
	};

	return (
		<html lang="en">
			<body
				className={`${inter.className} ${inter.variable} antialiased`}
			>
				{/* Desktop fixed right nav */}
				<nav className="hidden md:fixed md:top-0 md:right-0 md:h-full md:flex md:flex-col md:items-center md:justify-center md:shadow-lg md:w-1/4 md:bg-zinc-900 md:text-zinc-100 dark:md:bg-zinc-100 dark:md:text-zinc-900 z-40">
					<div className="flex flex-col gap-6 w-full items-center">
						{navLinks.map((link) => {
							const isActive = activeSection === link.id;
							const base =
								"px-4 py-2 w-full text-center text-lg hover:scale-110 transform transition duration-200";
							const active = "text-blue-600 dark:text-blue-400 font-semibold";
							const inactive = "text-zinc-100 dark:text-zinc-900 font-medium";

							return (
								<button
									key={link.id}
									type="button"
									className={`${base} ${isActive ? active : inactive}`}
									onClick={() => scrollToSection(link.id)}
									aria-current={isActive ? "location" : undefined}
								>
									{link.label}
								</button>
							);
						})}
					</div>
				</nav>

				{/* Mobile hamburger */}
				<div className="fixed top-4 right-4 z-50 md:hidden">
					<button
						aria-label="Open navigation menu"
						className="p-2 rounded-md border bg-white/80 dark:bg-black/80 shadow"
						onClick={() => setDrawerOpen(true)}
					>
						<svg
							width="28"
							height="28"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{/* Mobile drawer nav */}
				{drawerOpen && (
					<div className="fixed inset-0 z-50 flex">
						<div
							className="fixed inset-0 bg-black/40 backdrop-blur-sm"
							onClick={() => setDrawerOpen(false)}
						/>
						<nav className="relative ml-auto w-64 max-w-full h-full bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 shadow-lg flex flex-col items-center justify-center gap-6 p-8 animate-slide-in">
							<button
								aria-label="Close navigation menu"
								className="absolute top-4 right-4 p-2 rounded-md bg-zinc-800 dark:bg-zinc-200"
								onClick={() => setDrawerOpen(false)}
							>
								<svg
									width="24"
									height="24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
							{navLinks.map((link) => {
								const isActive = activeSection === link.id;
								const base = "px-4 py-2 w-full text-center text-lg";
								const active = "text-blue-600 dark:text-blue-400 font-semibold";
								const inactive =
									"text-zinc-100 dark:text-zinc-900 hover:underline font-medium";

								return (
									<button
										key={link.id}
										type="button"
										className={`${base} ${isActive ? active : inactive}`}
										onClick={() => scrollToSection(link.id)}
										aria-current={isActive ? "location" : undefined}
									>
										{link.label}
									</button>
								);
							})}
						</nav>
					</div>
				)}

				{/* Main content centered vertically and horizontally, with right margin for nav */}
				<div className="md:mr-[25%] md:w-3/4 md:border-r border-gray-700">
					{children}
				</div>

				{/* Simple slide-in animation for drawer */}
				<style jsx global>{`
					@keyframes slide-in {
						from {
							transform: translateX(100%);
						}
						to {
							transform: translateX(0);
						}
					}
					.animate-slide-in {
						animation: slide-in 0.2s cubic-bezier(0.4, 0, 0.2, 1);
					}
				`}</style>
			</body>
		</html>
	);
}
