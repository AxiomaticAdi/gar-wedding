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
						{Object.entries(ArrivalShuttlesData).map(([shuttleId]) => (
							<InfoBox key={shuttleId} title={shuttleId} />
						))}
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<h3 className="text-5xl font-bold">Departure Shuttles</h3>
					<div className="flex flex-wrap justify-center gap-4">
						{Object.entries(DepartureShuttlesData).map(([shuttleId]) => (
							<InfoBox key={shuttleId} title={shuttleId} />
						))}
					</div>
				</div>
			</div>
		</Page>
	);
}
