import Page from "../components/Page";
import { useParams } from "react-router-dom";
import { allShuttlesData } from "../data/ShuttlesData";

export default function ShuttleDetailsPage() {
	const { shuttleId } = useParams();

	const shuttle = allShuttlesData[shuttleId as keyof typeof allShuttlesData];

	return (
		<Page>
			<div className="p-4 shadow-md rounded bg-white">
				<h2 className="text-xl font-bold mb-2">{shuttle.name}</h2>
				<div className="mb-2">
					<strong>ID:</strong> {shuttle.id}
				</div>
				<div className="mb-2">
					<strong>Pickup Name:</strong> {shuttle.pickupName}
				</div>
				<div className="mb-2">
					<strong>Pickup Address:</strong> {shuttle.pickupAddress}
				</div>
				<div className="mb-2">
					<strong>Pickup Time:</strong> {shuttle.pickupTime}
				</div>
				<div className="mb-2">
					<strong>Pickup Notes:</strong> {shuttle.pickupNotes}
				</div>
				<div className="mb-2">
					<strong>Dropoff Name:</strong> {shuttle.dropoffName}
				</div>
				<div className="mb-2">
					<strong>Dropoff Address:</strong> {shuttle.dropoffAddress}
				</div>
				<div className="mb-2">
					<strong>Dropoff Time:</strong> {shuttle.dropoffTime}
				</div>
				<div className="mb-2">
					<strong>Dropoff Notes:</strong> {shuttle.dropoffNotes}
				</div>
				<div className="mb-2">
					<strong>Notes:</strong> {shuttle.notes}
				</div>
			</div>
		</Page>
	);
}
