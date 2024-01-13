import { useEffect, useState } from "react";
import { Guest } from "./types";
import { GuestListService } from "./services/GuestListService";
import AutoCompleteTextInput from "./components/AutoCompleteTextInput";
import LoadingSpinner from "./components/LoadingSpinner";
import Page from "./components/Page";
import GuestInfoSection from "./components/GuestInfoSection";
import { alphabeticalLastNameSort } from "./logic";
import TableModal from "./components/TableModal";
import CustomButton from "./components/CustomButton";

function App() {
	const [guestList, setGuestList] = useState<Guest[]>();
	const [selectedGuest, setSelectedGuest] = useState<Guest | undefined>(
		undefined
	);

	// On first load
	useEffect(() => {
		// Fetch Games
		if (guestList === undefined) {
			GuestListService.fetchGuestsAsync().then((res) => {
				res.sort(alphabeticalLastNameSort);
				setGuestList(res);
			});
		}
	});

	// if guests not hydrated yet, show loading spinner
	if (guestList === undefined) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	const handleSelectGuest = (fullName: string) => {
		const matchingGuest = guestList.find(
			(guest) => guest.fullName === fullName
		);
		setSelectedGuest(matchingGuest);
	};

	const guestNames = new Set(guestList.map((guest) => guest.fullName));

	return (
		<Page>
			<div className="flex flex-col items-center gap-4">
				<img
					src={"weddingphoto.webp"}
					alt="Couple photo"
					className="rounded-full h-60 w-60 grayscale"
				/>
				<h3 className="text-5xl font-bold">Guest Info Lookup</h3>
				{!selectedGuest && (
					<AutoCompleteTextInput
						placeholder={"Type your name..."}
						dataSet={guestNames}
						onSelect={handleSelectGuest}
					/>
				)}
				<GuestInfoSection guest={selectedGuest} />
				{selectedGuest && (
					<CustomButton onClick={() => setSelectedGuest(undefined)}>
						Clear
					</CustomButton>
				)}
				<TableModal guest={selectedGuest} guestList={guestList} />
			</div>
		</Page>
	);
}

export default App;
