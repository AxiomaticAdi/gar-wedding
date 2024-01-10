import InfoBox from "../components/InfoBox";
import Page from "../components/Page";

import { useNavigate } from "react-router-dom";

import {
	ArrivalShuttlesData,
	DepartureShuttlesData,
} from "../data/ShuttlesData";

export default function ShuttlesPage() {
	const navigate = useNavigate();
	const handleShuttleClick = (shuttleId: string) => {
		const slug = shuttleId.toLowerCase();
		navigate(`/gar-wedding/shuttles/${slug}`);
	};

	return (
		<Page>
			<div className="flex flex-col items-center gap-12">
				<div className="flex flex-col items-center justify-center gap-4">
					<h3 className="text-5xl font-bold">Arrival Shuttles</h3>
					<div className="flex flex-wrap justify-center gap-4">
						{Object.entries(ArrivalShuttlesData).map(([shuttleId, shuttle]) => (
							<InfoBox
								key={shuttleId}
								title={shuttle.id}
								onClick={() => handleShuttleClick(shuttleId)}
							/>
						))}
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<h3 className="text-5xl font-bold">Departure Shuttles</h3>
					<div className="flex flex-wrap justify-center gap-4">
						{Object.entries(DepartureShuttlesData).map(
							([shuttleId, shuttle]) => (
								<InfoBox
									key={shuttleId}
									title={shuttle.id}
									onClick={() => handleShuttleClick(shuttleId)}
								/>
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
