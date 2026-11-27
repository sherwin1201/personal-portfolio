import Image from "next/image";

const linkOptions = [
	{ key: "android", label: "Android", icon: "/work/links/playstore.svg" },
	{ key: "ios", label: "iOS", icon: "/work/links/appstore.svg" },
	{ key: "reference", label: "Reference", icon: "/work/links/page.svg" },
];

const ProjectLinks = ({ links }) => {
	return (
		<>
			{linkOptions.map(
				({ key, label, icon }) =>
					links?.[key] && (
						<a
							key={key}
							href={links[key]}
							title={label}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-3 py-2 text-sm text-zinc-700 transition-transform duration-200 hover:scale-105 hover:border-primary hover:text-primary"
						>
							<Image src={icon} alt="" width={20} height={20} />
							<span>{label}</span>
							<span
								aria-hidden="true"
								className="h-4 w-4 shrink-0 bg-current"
								style={{
									maskImage: 'url("/external-link.svg")',
									WebkitMaskImage: 'url("/external-link.svg")',
									maskSize: "contain",
									WebkitMaskSize: "contain",
									maskRepeat: "no-repeat",
									WebkitMaskRepeat: "no-repeat",
									maskPosition: "center",
									WebkitMaskPosition: "center",
								}}
							/>
						</a>
					),
			)}
		</>
	);
};

export default ProjectLinks;
