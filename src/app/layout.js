"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/skills", label: "Skills" },
	{ href: "/experience", label: "Experience" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" },
];

export default function Root({ children }) {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const pathname = usePathname();

	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{/* Desktop fixed right nav */}
				<nav className="hidden md:fixed md:top-0 md:right-0 md:h-full md:flex md:flex-col md:items-center md:justify-center md:shadow-lg md:w-1/4 z-40">
					<div className="flex flex-col gap-6 w-full items-center">
						{navLinks.map((link) => {
							const isActive =
								pathname === link.href ||
								pathname === link.href + "/" ||
								(link.href !== "/" && pathname?.startsWith(link.href));
							const base =
								"px-4 py-2 w-full text-center text-lg hover:scale-110 transform transition duration-200";
							const active = "text-blue-600 dark:text-blue-400 font-semibold";
							const inactive = "text-zinc-700 dark:text-zinc-300 font-medium";

							return (
								<Link
									key={link.href}
									href={link.href}
									className={`${base} ${isActive ? active : inactive}`}
									onClick={() => setDrawerOpen(false)}
									aria-current={isActive ? "page" : undefined}
								>
									{link.label}
								</Link>
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
						<nav className="relative ml-auto w-64 max-w-full h-full bg-white dark:bg-zinc-900 shadow-lg flex flex-col items-center justify-center gap-6 p-8 animate-slide-in">
							<button
								aria-label="Close navigation menu"
								className="absolute top-4 right-4 p-2 rounded-md border bg-zinc-100 dark:bg-zinc-800"
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
								const isActive =
									pathname === link.href ||
									pathname === link.href + "/" ||
									(link.href !== "/" && pathname?.startsWith(link.href));
								const base = "px-4 py-2 w-full text-center text-lg";
								const active = "text-blue-600 dark:text-blue-400 font-semibold";
								const inactive =
									"text-zinc-700 dark:text-zinc-300 hover:underline font-medium";

								return (
									<Link
										key={link.href}
										href={link.href}
										className={`${base} ${isActive ? active : inactive}`}
										onClick={() => setDrawerOpen(false)}
										aria-current={isActive ? "page" : undefined}
									>
										{link.label}
									</Link>
								);
							})}
						</nav>
					</div>
				)}

				{/* Main content centered vertically and horizontally, with right margin for nav */}
				<div className="min-h-screen flex items-center justify-center md:mr-48 md:w-3/4 md:border-r border-gray-700">
					<div className="md:w-3/4">{children}</div>
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
