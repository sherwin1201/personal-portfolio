export const experience = [
	{
		company: "Numino Labs Pvt. Ltd.",
		workType: "Full time",
		role: "Product Delivery Engineer",
		website: "https://numinolabs.com/",
		address: "Goa, India",
		startDate: "2022-09-12",
		endDate: null,
		projects: ["kinlink", "avetta-mobile", "numino-leave-management"],
		summary:
			"Led full-stack mobile app development, collaborated with clients, mentored developers, contributed to major projects, supported hiring, enforced clean coding practices, and improved internal systems.",
	},
	{
		company: "Imagine Works",
		workType: "Internship",
		role: "Frontend Web Developer",
		website: "https://www.linkedin.com/company/imagine-works/",
		address: "Goa, India",
		startDate: "2021-06-03",
		endDate: "2021-09-20",
		summary:
			"Delivered diverse assignments and mini-projects across multiple domains with consistent quality and efficiency using technlogies such as PHP, Laravel, Vue, Lumen and Symfony.",
	},
];

export const contact = {
	email: "sherwfernand@gmail.com",
	phone: "+91 9168493859",
	github: "https://github.com/sherwin1201",
	linkedin: "https://www.linkedin.com/in/sherwin-fernandes-815613168/",
};

export const quickStats = [
	{ stat: "3+", label: "Years experience" },
	{ stat: "4+", label: "Production projects" },
	{ stat: "8+", label: "Technologies" },
];

export const skills = [
	{
		skill: "React",
		category: "frontend",
		experience: 0.9,
		icon: "skills/react.svg",
		fill: "#61DAFB",
	},
	{
		skill: "React Native",
		category: "frontend",
		experience: 0.9,
		icon: "skills/react.svg",
		fill: "#61DAFB",
	},
	{
		skill: "Redux",
		category: "frontend",
		experience: 0.8,
		icon: "skills/redux.svg",
		fill: "#764ABC",
	},
	{
		skill: "Tailwind",
		category: "frontend",
		experience: 0.7,
		icon: "skills/tailwind.svg",
		fill: "#06B6D4",
	},
	{
		skill: "Android",
		category: "frontend",
		experience: 0.8,
		icon: "skills/android.svg",
		fill: "#3DDB85",
	},
	{
		skill: "Node.js",
		category: "backend",
		experience: 0.5,
		icon: "skills/nodejs.svg",
		fill: "#8CC84B",
	},
	{
		skill: "Firebase",
		category: "backend",
		experience: 0.7,
		icon: "skills/firebase.svg",
		fill: "#FFA000",
	},
	{
		skill: "GraphQL",
		category: "backend",
		experience: 0.6,
		icon: "skills/graphql.svg",
		fill: "#E535AB",
	},
	{
		skill: "AWS",
		category: "backend",
		experience: 0.75,
		icon: "skills/aws.svg",
		fill: "#F90",
	},
	{
		skill: "MySQL",
		category: "database",
		experience: 0.5,
		icon: "skills/mysql.svg",
		fill: "#00546B",
	},
	{
		skill: "Neo4j",
		category: "database",
		experience: 0.7,
		icon: "skills/neo4j.svg",
		fill: "#0689F8",
	},
	{
		skill: "Project Leadership",
		category: "soft-skill",
		experience: 0.7,
		icon: "skills/leadership.svg",
		fill: "#FBB400",
	},
	{
		skill: "Organisation",
		category: "soft-skill",
		experience: 0.9,
		icon: "skills/organisation.svg",
		fill: "#FE5263",
	},
	{
		skill: "Communication",
		category: "soft-skill",
		experience: 0.9,
		icon: "skills/communication.svg",
		fill: "#66C6B9",
	},
	{
		skill: "Problem Solving",
		category: "soft-skill",
		experience: 0.8,
		icon: "skills/problem-solving.svg",
		fill: "#00B4D8",
	},
];

export const work = [
	{
		id: "avetta-mobile",
		projectName: "Avetta Mobile",
		desription:
			"Avetta provides a platform for managing supply chain risk, helping clients prequalify and monitor contractors and suppliers",
		cover: "work/avetta.png",
		relevant: true,
		tags: ["React Native", "Redux", "Firebase", "Fullstory"],
		links: {
			android:
				"https://play.google.com/store/apps/details?id=com.avetta.android.avettaworkermanagement",
			ios: "https://apps.apple.com/in/app/avetta-mobile/id1536748796",
		},
	},
	{
		id: "kinlink",
		projectName: "Kinlink",
		desription:
			"Kinlink is a social networking app where you can find neigbours around you and form communities based on shared interests",
		cover: "work/kinlink.png",
		relevant: true,
		tags: ["React Native", "GraphQL", "Neo4j", "NodeJS", "AWS"],
		links: {
			android: "https://play.google.com/store/apps/details?id=com.kinlink",
			ios: "https://apps.apple.com/us/app/kinlink/id6450735314",
		},
	},
	{
		id: "numino-leave-management",
		projectName: "Numino Leave Management - Mobile App",
		desription:
			"An internal project of Numino Labs to manage employee leaves requests and approvals",
		cover: "work/numino-leave-management.png",
		relevant: false,
		tags: ["React Native", "React Query", "Redux", "Google Auth API"],
		links: {
			android:
				"https://play.google.com/store/apps/details?id=com.numino.leavemanagement&hl=en",
		},
	},
	{
		id: "sign-language-apprehension",
		projectName: "Sign Language Apprehension",
		desription:
			"A univeristy project to detect sign language gestures for 37 signs of the ASL alphabet",
		cover: "work/kinlink.jpg",
		relevant: false,
		tags: ["Python", "Tensorflow", "Keras", "OpenCV"],
		links: {
			reference: "https://ieeexplore.ieee.org/document/9984249",
		},
	},
];
