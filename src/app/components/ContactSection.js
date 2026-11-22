import Image from "next/image";
import { contact } from "@/data/siteData";

export default function ContactSection() {
	return (
		<div className="mx-auto w-full max-w-2xl px-6 py-24 flex flex-col items-center text-center">
			<h1 className="text-2xl font-semibold mb-6">
				Feel free to reach out to me
			</h1>
			<div className="flex flex-col gap-4">
				<a
					href={`mailto:${contact.email}`}
					className="flex items-center gap-2 rounded-md border border-gray-700 px-4 py-2 text-sm text-white hover:opacity-90"
				>
					<Image src="/contact/email.svg" alt="Email icon" width={20} height={20} />
					{contact.email}
				</a>
				<div className="flex items-center gap-2 rounded-md border border-gray-700 px-4 py-2 text-sm text-white">
					<Image src="/contact/phone.svg" alt="Phone icon" width={18} height={18} />
					{contact.phone}
				</div>
			</div>
			<div className="mt-8 flex flex-wrap justify-center gap-3">
				<a href={contact.github} title="Github" target="_blank" rel="noopener noreferrer">
					<Image src="/contact/github.svg" alt="Github icon" width={24} height={24} />
				</a>
				<a href={contact.linkedin} title="Linkedin" target="_blank" rel="noopener noreferrer">
					<Image src="/contact/linkedin.svg" alt="Linkedin icon" width={24} height={24} />
				</a>
			</div>
		</div>
	);
}
