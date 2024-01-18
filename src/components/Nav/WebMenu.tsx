import { NavLink } from "react-router-dom";
import { Link } from "./NavBar";

interface WebMenuProps {
	links: Link[];
}
export default function WebMenu({ links }: WebMenuProps) {
	return (
		<div className="hidden mx-auto sm:block">
			<div className=" text-zinc-400 flex gap-6 items-center shadow-md border border-zinc-300 rounded-full px-5 py-3 bg-white">
				{links.map(({ text, path }, index) => {
					return (
						<NavLink
							key={index}
							to={path}
							className={({ isActive }) =>
								[
									"hover:text-teal-800 cursor-pointer",
									isActive ? "text-black" : "",
								].join(" ")
							}
						>
							{text}
						</NavLink>
					);
				})}
			</div>
		</div>
	);
}
