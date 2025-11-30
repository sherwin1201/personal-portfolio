import Image from "next/image";

const ProjectLinks = ({ links }) => {
	return (
		<>
			{links?.android && (
				<a
					href={links.android}
					title="Playstore"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block rounded-full text-sm text-white hover:opacity-90"
				>
					<Image
						src="/work/links/playstore.svg"
						alt="Playstore image"
						width={20}
						height={20}
					/>
				</a>
			)}

			{links?.ios && (
				<a
					href={links.ios}
					title="App Store"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block rounded-full text-sm text-white hover:opacity-90"
				>
					<Image
						src="/work/links/appstore.svg"
						alt="Appstore image"
						width={20}
						height={20}
					/>
				</a>
			)}

			{links?.reference && (
				<a
					href={links.reference}
					title="Case Study"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block rounded-full text-sm text-white hover:opacity-90"
				>
					<Image
						src="/work/links/page.svg"
						alt="Case study image"
						width={20}
						height={20}
					/>
				</a>
			)}
		</>
	);
};

export default ProjectLinks;
