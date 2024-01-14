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
