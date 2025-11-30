const ProjectTags = ({ tags }) => {
	return (
		tags &&
		tags.length > 0 && (
			<div className="flex flex-wrap gap-2">
				{tags.map((t) => (
					<span
						key={t}
						className="rounded-lg bg-gray-900 px-3 py-2 text-xs text-white"
					>
						{t}
					</span>
				))}
			</div>
		)
	);
};

export default ProjectTags;
