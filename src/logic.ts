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
