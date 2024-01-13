import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface InfoBoxProps {
	title: string;
	description?: string;
	clickIcon?: boolean;
	onClick?: () => void;
}

export default function InfoBox({
	title,
	description,
	clickIcon,
	onClick,
}: InfoBoxProps) {
	return (
		<button
			onClick={onClick}
			className="flex gap-4 justify-end items-center bg-white rounded-md p-3 shadow hover:bg-gray-100"
		>
			<div className="flex flex-col">
				<h4 className="text-xl text-gray-500">{title}</h4>
				{description && <p>{description}</p>}
			</div>
			{clickIcon && (
				<div className="text-gray-500 w-6 h-6">
					<ChevronRightIcon />
				</div>
			)}
		</button>
	);
}
