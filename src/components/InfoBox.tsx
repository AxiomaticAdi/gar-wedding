interface InfoBoxProps {
	title: string;
	description: string;
	onClick?: () => void;
}

export default function InfoBox({ title, description, onClick }: InfoBoxProps) {
	return (
		<button
			onClick={onClick}
			className="flex flex-col justify-center items-center bg-white rounded-md p-3 shadow"
		>
			<h4 className="text-xl text-gray-500">{title}</h4>
			<p>{description}</p>
		</button>
	);
}
