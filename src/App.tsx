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

	const handleClickGuest = (fullName: string) => {
		const slug = nameToUrlSlug(fullName);
		navigate(`/guests/${slug}`);
	};

	const guestNames = new Set(guestList.map((guest) => guest.fullName));

	return (
		<Page>
			<div className="flex flex-col items-center gap-8">
				<img
					src={"weddingphoto.webp"}
					alt="Couple photo"
					className="rounded-full h-60 w-60 grayscale"
				/>
				<h3 className="text-4xl font-bold">
					We are SO excited to celebrate with you!
				</h3>
				<div className="text-gray-600 max-w-md mx-4">
					You can find your most up-to-date assigned shuttle information here.
					We'll be updating this site periodically with more wedding weekend
					info, so stay tuned!
				</div>
				<AutoCompleteTextInput
					placeholder={"Find your name..."}
					dataSet={guestNames}
					onSelect={handleClickGuest}
				/>
			</div>
		</Page>
	);
}

export default App;
