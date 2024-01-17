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
			path: "/",
		},
		{
			text: "Shuttles",
			path: "/shuttles/",
		},
		{
			text: "Checklist",
			path: "/checklist/",
		},
		{
			text: "Guides",
			path: "/guides/",
		},
	];

	return (
		<nav className="w-full flex">
			<WebMenu links={links} />
			<MobileMenu links={links} />
		</nav>
	);
}
