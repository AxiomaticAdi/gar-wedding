import { Guest } from "../types";
import InfoBox from "./InfoBox";

import { useModal } from "../context/TableModalContext";

interface GuestInfoSectionProps {
	guest: Guest | undefined;
}

export default function GuestInfoSection({ guest }: GuestInfoSectionProps) {
	// Return nothing if undefined
	if (guest === undefined) {
		return null;
	}

	const { toggleModal } = useModal();

	return (
		<div className="flex flex-col items-center gap-4 py-4 px-6">
			<div className="text-2xl font-semibold">{guest.fullName}</div>
			<div className="flex flex-col gap-4">
				<InfoBox title={"Arrival Shuttle"} description={guest.arrivalShuttle} />
				<InfoBox
					title={"Departure Shuttle"}
					description={guest.departureShuttle}
				/>
				<InfoBox
					title={"Reception Table"}
					description={guest.receptionTableNumber}
					onClick={toggleModal}
				/>
			</div>
		</div>
	);
}
