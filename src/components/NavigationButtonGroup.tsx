import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

interface NavigationButtonGroupProps {
	includeHome?: boolean;
	includeAllShuttles?: boolean;
}
export default function NavigationButtonGroup({
	includeHome = true,
	includeAllShuttles = true,
}: NavigationButtonGroupProps) {
	return (
		<div className="flex flex-wrap gap-4">
			{includeHome && (
				<Link to={"/"} className="pt-4">
					<CustomButton>Home</CustomButton>
				</Link>
			)}
			{includeAllShuttles && (
				<Link to={"/shuttles/"} className="pt-4">
					<CustomButton>All Shuttles</CustomButton>
				</Link>
			)}
		</div>
	);
}
