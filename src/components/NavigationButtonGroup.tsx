import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

export default function NavigationButtonGroup() {
	return (
		<div className="flex flex-wrap gap-4">
			<Link to={"/gar-wedding/"} className="pt-4">
				<CustomButton>Home</CustomButton>
			</Link>
			<Link to={"/gar-wedding/shuttles/"} className="pt-4">
				<CustomButton>All Shuttles</CustomButton>
			</Link>
		</div>
	);
}
