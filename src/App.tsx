import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Guest } from "./types";
import { GuestListService } from "./services/GuestListService";
import AutoCompleteTextInput from "./components/AutoCompleteTextInput";
import LoadingSpinner from "./components/LoadingSpinner";
import Page from "./components/Page";
import { alphabeticalLastNameSort, nameToUrlSlug } from "./logic";

function App() {
	const [guestList, setGuestList] = useState<Guest[]>();

	const navigate = useNavigate();

	// On first load
	useEffect(() => {
		// Fetch guests
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

	// const handleSelectGuest = (fullName: string) => {
	// 	const matchingGuest = guestList.find(
	// 		(guest) => guest.fullName === fullName
	// 	);
	// 	setSelectedGuest(matchingGuest);
	// };

	const handleClickGuest = (fullName: string) => {
		const slug = nameToUrlSlug(fullName);
		navigate(`/guests/${slug}`);
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
				<AutoCompleteTextInput
					placeholder={"Type your name..."}
					dataSet={guestNames}
					onSelect={handleClickGuest}
				/>
			</div>
		</Page>
	);
}

export default App;
