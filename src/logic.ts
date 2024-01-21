import { Guest } from "./types";
export const alphabeticalLastNameSort = (a: Guest, b: Guest) => {
	if (a.lastName < b.lastName) {
		return -1;
	}
	if (a.lastName > b.lastName) {
		return 1;
	}
	return 0;
};

export function getOtherTableGuests(currentGuest: Guest, guestList: Guest[]) {
	const currentGuestTableNumber = currentGuest.receptionTableNumber;

	// Filter for all guests at the same table
	const tableGuests = guestList.filter(
		(guest) => guest.receptionTableNumber === currentGuestTableNumber
	);

	return tableGuests.map((guest) => guest.fullName);
}

export function nameToUrlSlug(fullname: string): string {
	// Remove all non-English alphabet characters, except for spaces
	let slug = fullname.replace(/[^a-zA-Z ]/g, "");

	// Replace spaces with dashes (names are still case-sensitive)
	return slug.replace(/\s+/g, "-");
}

export function urlSlugToName(slug: string): string {
	// Replace dashes with spaces
	let name = slug.replace(/-/g, " ");
	return name;
}

export function countGuestsByShuttle(guests: Guest[]): Record<string, number> {
	const shuttleCounts: Record<string, number> = {};

	guests.forEach((guest) => {
		// Count for arrival shuttle
		if (guest.arrivalShuttleId) {
			const arrivalShuttle = guest.arrivalShuttleId.toLowerCase();
			shuttleCounts[arrivalShuttle] = (shuttleCounts[arrivalShuttle] || 0) + 1;
		}

		// Count for departure shuttle
		if (guest.departureShuttleId) {
			const departureShuttle = guest.departureShuttleId.toLowerCase();
			shuttleCounts[departureShuttle] =
				(shuttleCounts[departureShuttle] || 0) + 1;
		}
	});

	return shuttleCounts;
}
