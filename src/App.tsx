import { useEffect, useState } from "react";
import { Guest } from "./types";
import { GuestListService } from "./services/GuestListService";
import AutoCompleteTextInput from "./components/AutoCompleteTextInput";
import LoadingSpinner from "./components/LoadingSpinner";
import Page from "./components/Page";
import GuestInfoSection from "./components/GuestInfoSection";

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
			<h3 className="text-6xl">Guest Lookup</h3>
			<AutoCompleteTextInput
				placeholder={"Type your name..."}
				dataSet={guestNames}
				onSelect={handleSelectGuest}
			/>
			<GuestInfoSection guest={selectedGuest} />
		</Page>
	);
}

export default App;
