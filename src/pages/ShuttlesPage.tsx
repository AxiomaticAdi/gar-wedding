import InfoBox from "../components/InfoBox";
import Page from "../components/Page";

import {
	ArrivalShuttlesData,
	DepartureShuttlesData,
} from "../data/ShuttlesData";

export default function ShuttlesPage() {
	return (
		<Page>
			<div className="flex flex-col items-center gap-12">
				<div className="flex flex-col items-center justify-center gap-4">
					<h3 className="text-5xl font-bold">Arrival Shuttles</h3>
					<div className="flex flex-wrap justify-center gap-4">
						{Object.entries(ArrivalShuttlesData).map(([shuttleId, shuttle]) => (
							<InfoBox key={shuttleId} title={shuttle.name} />
						))}
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<h3 className="text-5xl font-bold">Departure Shuttles</h3>
					<div className="flex flex-wrap justify-center gap-4">
						{Object.entries(DepartureShuttlesData).map(
							([shuttleId, shuttle]) => (
								<InfoBox key={shuttleId} title={shuttle.name} />
							)
						)}
					</div>
				</div>
				<div className="flex flex-col items-center justify-center text-gray-500">
					<h2>
						Want to change shuttles? Contact Adi or Gracie to check
						availability!
					</h2>
				</div>
			</div>
		</Page>
	);
}
