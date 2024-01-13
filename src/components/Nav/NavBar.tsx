import WebMenu from "./WebMenu";
import MobileMenu from "./MobileMenu";

export type Link = {
	text: string;
	path: string;
};

export default function Navbar() {
	const links: Link[] = [
		{
			text: "Home",
			path: "/gar-wedding/",
		},
		{
			text: "Shuttles",
			path: "/gar-wedding/shuttles/",
		},
		{
			text: "Checklist",
			path: "/gar-wedding/checklist",
		},
	];

	return (
		<nav className="w-full flex">
			<WebMenu links={links} />
			<MobileMenu links={links} />
		</nav>
	);
}
