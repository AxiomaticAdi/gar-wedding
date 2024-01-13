export type ChecklistItemProps = {
	id: number;
	title: string;
	description?: string;
};

export default function ChecklistItem({
	title,
	description,
}: ChecklistItemProps) {
	return (
		<div className="flex gap-8 my-2">
			<div className="flex gap-2 items-center pt-4">
				<input
					id="comments"
					aria-describedby="comments-description"
					name="comments"
					type="checkbox"
					className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600 accent-gray-600"
				/>
				<div className="flex text-left">
					<p className="text-gray-500">
						<span className="text-black font-semibold"> {title} </span>{" "}
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}
