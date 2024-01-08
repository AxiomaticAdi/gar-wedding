import axios from "axios";
import { Guest } from "../types";

const dataEndpoint =
	"https://docs.google.com/spreadsheets/d/1z1oNWgvIkbZ9Rkzv_IXf4NLFDtY6FrYGfVUVAcS7TyU/gviz/tq?";

let guests: Guest[] | undefined;

type SheetCell = {
	v: string | number;
	f: string | undefined;
};

type SheetRow = {
	c: (SheetCell | null)[];
};

export function sheetRowToMatch(cell: SheetRow, id: string): Guest {
	let column = -1;
	const rowId = id;

	const firstName = String(cell.c[++column]?.v) ?? "";
	const lastName = String(cell.c[++column]?.v) ?? "";
	const fullName = firstName + " " + lastName;

	column = column + 2;

	const rsvp_Haldi = String(cell.c[++column]?.v) === "Attending";
	const rsvp_Wedding = String(cell.c[++column]?.v) === "Attending";
	const rsvp_Breakfast = String(cell.c[++column]?.v) === "Attending";

	const arrivalShuttle = String(cell.c[++column]?.v) ?? "";
	const departureShuttle = String(cell.c[++column]?.v) ?? "";
	const receptionTableNumber = String(cell.c[++column]?.v) ?? "";

	return {
		id: rowId,
		firstName: firstName,
		lastName: lastName,
		fullName: fullName,
		rsvp_Haldi: rsvp_Haldi,
		rsvp_Wedding: rsvp_Wedding,
		rsvp_Breakfast: rsvp_Breakfast,
		arrivalShuttle: arrivalShuttle,
		departureShuttle: departureShuttle,
		receptionTableNumber: receptionTableNumber,
	};
}

function mapObjectToGuests(resultObj: any): Guest[] | undefined {
	const guests: Guest[] = [];

	if (resultObj.table === undefined || resultObj.table.rows === undefined) {
		console.log(
			"Error parsing JSON object from data: resultObj.table or resultObj.table.rows is undefined."
		);
		return undefined;
	}

	for (let i = 0; i < resultObj.table.rows.length; i++) {
		const cell = resultObj.table.rows[i];
		const guest = sheetRowToMatch(cell, i.toString());
		guests.push(guest);
	}

	return guests;
}

async function fetchGuestsAsync(): Promise<Guest[]> {
	if (guests !== undefined) {
		return guests;
	} else {
		console.log("Fetching guests...");
		const result = await axios.get<string>(dataEndpoint, {}).then((res) => {
			// strip out the setResponse text from the data
			let raw: string = res.data;
			const startText = ".setResponse(";
			raw = raw.substring(raw.indexOf(startText) + startText.length);
			raw = raw.substring(0, raw.length - 2);
			const resultObj = JSON.parse(raw);
			const matches = mapObjectToGuests(resultObj);

			if (matches !== undefined) {
				guests = matches;
				return matches;
			} else {
				console.log("mapping resultObj to matches failed.");
			}
		});
		return result ?? [];
	}
}

export const GuestListService = {
	fetchGuestsAsync,
};
