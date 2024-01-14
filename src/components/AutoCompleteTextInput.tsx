import { useMemo, useState } from "react";
import { Combobox } from "@headlessui/react";

interface AutoCompleteTextInputProps {
	placeholder: string;
	dataSet: Set<string>;
	onSelect: (value: string) => void;
}

export default function AutoCompleteTextInput({
	placeholder,
	dataSet,
	onSelect,
}: AutoCompleteTextInputProps) {
	const [query, setQuery] = useState("");

	const handleSelect = (value: string) => {
		onSelect(value);
		setQuery("");
	};

	const dataArray: string[] = useMemo(
		() => Array.from(dataSet), // Renamed from equipmentArray
		[dataSet]
	);

	const filterData = (query: string, dataArray: string[]) => {
		// Renamed from filterEquipment
		return query === ""
			? dataArray
			: dataArray.filter(
					(
						item // Renamed from equipment
					) => item.toLowerCase().includes(query.toLowerCase())
				);
	};

	const filteredData = useMemo(
		() => filterData(query, dataArray), // Renamed from filteredEquipment
		[query, dataArray]
	);

	return (
		<Combobox value={query} onChange={handleSelect}>
			<div className="relative">
				<Combobox.Input
					value={query}
					onChange={(event) => setQuery(event.target.value)}
					placeholder={placeholder}
					autoComplete="off"
					className="block w-full pl-2 rounded-md border-0 bg-white py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
				/>
				<Combobox.Options className="absolute z-50 max-h-80 w-full scroll-py-2 divide-y divide-gray-500 overflow-y-auto rounded-md bg-black">
					<ul className="text-sm text-left text-white">
						{filteredData.map((item) => (
							<Combobox.Option
								key={item}
								value={item}
								className="flex justify-between rounded-md px-3 py-2 hover:bg-gray-400 hover:text-white"
							>
								<span>{item}</span>
							</Combobox.Option>
						))}
					</ul>
				</Combobox.Options>
			</div>
		</Combobox>
	);
}
