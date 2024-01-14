import Page from "../components/Page";
import { useParams } from "react-router-dom";
import NavigationButtonGroup from "../components/NavigationButtonGroup";
import ErrorPage from "./ErrorPage";
import { GuestListService } from "../services/GuestListService";
import GuestInfoSection from "../components/GuestInfoSection";
import { Guest } from "../types";
import { useEffect, useState } from "react";
import { alphabeticalLastNameSort, urlSlugToName } from "../logic";
import LoadingSpinner from "../components/LoadingSpinner";
import TableModal from "../components/TableModal";

export default function GuestDetailsPage() {
	const { guestFullNameSlug } = useParams();
	const [guestList, setGuestList] = useState<Guest[]>();

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

	if (!guestFullNameSlug) {
		return <ErrorPage />;
	}

	const guestFullName = urlSlugToName(guestFullNameSlug);
	const guest = guestList.find((guest) => guest.fullName === guestFullName);

	// if guests is undefined, show error page
	if (guest === undefined) {
		return <ErrorPage />;
	}

	return (
		<Page>
			<GuestInfoSection guest={guest} />

			<TableModal guest={guest} guestList={guestList} />

			<NavigationButtonGroup />
		</Page>
	);
}
