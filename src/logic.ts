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
	const currentGuestId = currentGuest.id;

	// Filter for guests at the same table and exclude the target guest
	const tableGuests = guestList.filter(
		(guest) =>
			guest.receptionTableNumber === currentGuestTableNumber &&
			guest.id !== currentGuestId
	);

	// Select every other guest at the table
	return tableGuests.map((guest) => guest.fullName);
}
