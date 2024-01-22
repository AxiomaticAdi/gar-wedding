import Page from "../components/Page";
import { useParams } from "react-router-dom";
import { allShuttlesData } from "../data/ShuttlesData";
import Divider from "../components/Divider";
import NavigationButtonGroup from "../components/NavigationButtonGroup";
import ShuttleHelpSection from "../components/ShuttleHelpSection";

export default function ShuttleDetailsPage() {
	const { shuttleId } = useParams();

	const shuttle = allShuttlesData[shuttleId as keyof typeof allShuttlesData];

	return (
		<Page>
			<div className="p-4 shadow-md rounded bg-white mx-4 sm:mx-0 flex flex-col gap-4">
				<h2 className="text-2xl text-center font-bold my-auto">{shuttle.id}</h2>

				<Divider />

				<div className="rounded flex flex-col gap-2">
					<div>
						<strong>Pickup Name:</strong> {shuttle.pickupName}
					</div>
					<div>
						<strong>Pickup Time:</strong> {shuttle.pickupTime}
					</div>
					<div>
						<strong>Pickup Address:</strong> {shuttle.pickupAddress}
					</div>
					{shuttle.pickupNotes && (
						<div>
							<strong>Pickup Notes:</strong> {shuttle.pickupNotes}
						</div>
					)}
				</div>

				<Divider />

				<div className="rounded flex flex-col gap-2">
					<div>
						<strong>Dropoff Name:</strong> {shuttle.dropoffName}
					</div>
					<div>
						<strong>Dropoff Time:</strong> {shuttle.dropoffTime}
					</div>
					<div>
						<strong>Dropoff Address:</strong> {shuttle.dropoffAddress}
					</div>
					{shuttle.dropoffNotes && (
						<div>
							<strong>Dropoff Notes:</strong> {shuttle.dropoffNotes}
						</div>
					)}
				</div>

				{shuttle.notes && (
					<>
						<Divider />
						<div className="rounded flex flex-col gap-2">
							<div>
								<strong>Notes:</strong> {shuttle.notes}
							</div>
						</div>
					</>
				)}
			</div>

			{shuttle.type === "arrival" && (
				<div className="mt-8">
					<ShuttleHelpSection />
				</div>
			)}

			<div className="mt-4">
				<NavigationButtonGroup />
			</div>
		</Page>
	);
}
