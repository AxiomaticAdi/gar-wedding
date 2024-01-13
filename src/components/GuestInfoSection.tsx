import { useNavigate } from "react-router-dom";

import { Guest } from "../types";
import InfoBox from "./InfoBox";
import { useModal } from "../context/TableModalContext";
import { allShuttleNames, allShuttlesData } from "../data/ShuttlesData";

interface GuestInfoSectionProps {
	guest: Guest | undefined;
}

export default function GuestInfoSection({ guest }: GuestInfoSectionProps) {
	const navigate = useNavigate();
	const { toggleModal } = useModal();

	// Return nothing if undefined
	if (guest === undefined) {
		return null;
	}

	const isRegisteredForArrivalShuttle: boolean = !guest.arrivalShuttleId
		.toLowerCase()
		.includes("none");
	const isRegisteredForDepartureShuttle: boolean = !guest.departureShuttleId
		.toLowerCase()
		.includes("none");

	const writeDescription = (shuttleIdString: string): string => {
		const shuttleId = shuttleIdString.toLowerCase();

		if (allShuttleNames.includes(shuttleId)) {
			return (
				allShuttlesData[shuttleId as keyof typeof allShuttlesData].id +
				": " +
				allShuttlesData[shuttleId as keyof typeof allShuttlesData].description
			);
		}

		return shuttleIdString;
	};

	const handleShuttleClick = (shuttleIdString: string) => {
		return () => {
			const slug = shuttleIdString.toLowerCase();
			if (allShuttleNames.includes(slug)) {
				navigate(`/gar-wedding/shuttles/${slug}`);
			}
		};
	};

	return (
		<div className="flex flex-col items-center gap-4 py-4 px-6">
			<div>
				<div className="text-2xl font-semibold">{guest.fullName}</div>
				<div className="text-sm text-gray-500 italic">
					click below for more info
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<InfoBox
					title={"Arrival Shuttle"}
					description={writeDescription(guest.arrivalShuttleId)}
					clickIcon={isRegisteredForArrivalShuttle}
					onClick={handleShuttleClick(guest.arrivalShuttleId)}
				/>
				<InfoBox
					title={"Departure Shuttle"}
					description={writeDescription(guest.departureShuttleId)}
					clickIcon={isRegisteredForDepartureShuttle}
					onClick={handleShuttleClick(guest.departureShuttleId)}
				/>
				<InfoBox
					title={"Reception Table"}
					description={guest.receptionTableNumber}
					clickIcon={true}
					onClick={toggleModal}
				/>
			</div>
		</div>
	);
}
