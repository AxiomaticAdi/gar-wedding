import Page from "../components/Page";
import { Link, useParams } from "react-router-dom";
import { allShuttlesData } from "../data/ShuttlesData";
import { useEffect, useState } from "react";
import { GuestListService } from "../services/GuestListService";
import { alphabeticalLastNameSort, countGuestsByShuttle } from "../logic";
import { Guest } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ShuttlePassengersPage() {
	const { shuttleId } = useParams();
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

	const shuttle = allShuttlesData[shuttleId as keyof typeof allShuttlesData];
	const shuttlePassengerCounts = countGuestsByShuttle(guestList);
	const isArrivalShuttle: boolean = shuttle.type === "arrival";
	const isSith: boolean =
		shuttle.id.toLowerCase() === "anakin" ||
		shuttle.id.toLowerCase() === "vader";

	const shuttlePassengers: Guest[] = guestList.filter((guest) => {
		if (isArrivalShuttle) {
			return guest.arrivalShuttleId.toLowerCase() === shuttleId;
		} else {
			return guest.departureShuttleId.toLowerCase() === shuttleId;
		}
	});

	// if passenger list not hydrated yet, show loading spinner
	if (shuttlePassengers === undefined) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	return (
		<Page>
			<Link
				to={"/admin/"}
				className="px-4 py-2 bg-slate-500 text-white shadow-md rounded-md mb-6"
			>
				{" "}
				← Back to Admin
			</Link>
			<h3 className="text-5xl font-bold">{shuttle.id}</h3>
			<p className="my-2 text-lg">
				{isArrivalShuttle ? "Arrival Shuttle" : "Departure Shuttle"}
			</p>
			<div className="flex flex-col gap-4">
				<div className="flex gap-4 bg-white rounded-md p-4">
					<p>
						<strong>Passengers:</strong>{" "}
						{shuttlePassengerCounts[shuttle.id.toLowerCase()]}
					</p>
					<p>
						<strong>Capacity:</strong> {shuttle.capacity}
					</p>
				</div>
				{isSith && (
					<div className="flex flex-col bg-white shadow-md rounded-md p-4">
						<p>
							<strong className="text-center">
								This shuttle has two stops!
							</strong>{" "}
						</p>
						<p>
							Total passengers in shuttle:{" "}
							{shuttlePassengerCounts["anakin"] +
								shuttlePassengerCounts["vader"]}
						</p>
					</div>
				)}

				<div>
					<p>
						<strong>Pickup Location:</strong> {shuttle.pickupName}
					</p>
					<p>
						<strong>Pickup Time:</strong> {shuttle.pickupTime}
					</p>
					<p>
						<strong>Dropoff Location:</strong> {shuttle.dropoffName}
					</p>
				</div>

				<div>
					<strong>Passengers:</strong>
					{shuttlePassengers.map((passenger) => (
						<div key={passenger.fullName}>{passenger.fullName}</div>
					))}
				</div>
			</div>
		</Page>
	);
}
