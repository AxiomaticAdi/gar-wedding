import { useRef } from "react";

export type ChecklistItemProps = {
	id: number;
	title: string;
	description?: string;
	onChange?: (value: boolean) => void;
};

export default function ChecklistItem({
	title,
	description,
	onChange,
}: ChecklistItemProps) {

	const isChecked = useRef(false);

	const localHandler = () => {
		if (onChange) {
			isChecked.current = !isChecked.current;
			onChange(isChecked.current);
		}
	};

	return (
		<div className="flex gap-8 my-2">
			<div className="flex gap-2 items-center pt-4">
				<input
					id="comments"
					aria-describedby="comments-description"
					name="comments"
					type="checkbox"
					className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600 accent-gray-600 flex-shrink-0"
					onChange={localHandler}
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
