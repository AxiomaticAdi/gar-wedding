import { Guest } from "../types";

interface GuestInfoSectionProps {
	guest: Guest | undefined;
}

export default function GuestInfoSection({ guest }: GuestInfoSectionProps) {
	// Return nothing if undefined
	if (guest === undefined) {
		return null;
	}

	return (
		<div className="flex flex-col">
			<div>Name: {guest.fullName}</div>
			<div>Arrival Shuttle: {guest.arrivalShuttle}</div>
			<div>Departure Shuttle: {guest.departureShuttle}</div>
			<div>Table Number: {guest.receptionTableNumber}</div>
		</div>
	);
}
