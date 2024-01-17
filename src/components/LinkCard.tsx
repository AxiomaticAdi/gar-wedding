import { Link } from "react-router-dom";

interface LinkCardProps {
	title: string;
	imageUrl?: string;
	path: string;
}

export default function LinkCard({ title, imageUrl, path }: LinkCardProps) {
	return (
		<Link
			className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow"
			to={path}
		>
			<div className="text-2xl font-bold px-4 py-5 sm:px-6">{title}</div>
			<div className="px-4 py-5 sm:p-6">
				<img src={imageUrl} />
			</div>
		</Link>
	);
}
