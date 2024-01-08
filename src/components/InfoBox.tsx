interface InfoBoxProps {
	title: string;
	description: string;
}

export default function InfoBox({ title, description }: InfoBoxProps) {
	return (
		<div className="flex flex-col justify-center items-center bg-white rounded-md p-3 shadow">
			<h4 className="text-xl text-gray-500">{title}</h4>
			<p>{description}</p>
		</div>
	);
}
