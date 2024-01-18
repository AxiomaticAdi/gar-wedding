import InfoBox from "../components/InfoBox";
import Page from "../components/Page";

import { useNavigate } from "react-router-dom";

import {
	ArrivalShuttlesData,
	DepartureShuttlesData,
} from "../data/ShuttlesData";
import NavigationButtonGroup from "../components/NavigationButtonGroup";

export default function ShuttlesPage() {
	const navigate = useNavigate();
	const handleShuttleClick = (shuttleId: string) => {
		const slug = shuttleId.toLowerCase();
		navigate(`/shuttles/${slug}`);
	};

	return (
		<Page>
			<div className="flex flex-col items-center gap-12">
				<h3 className="text-5xl font-bold">All Shuttles</h3>
				<div className="flex flex-col items-center justify-center gap-4">
					<h3 className="text-3xl font-bold">Arrival Shuttles</h3>
					<div className="flex flex-wrap justify-center gap-4">
						{Object.entries(ArrivalShuttlesData).map(([shuttleId, shuttle]) => (
							<InfoBox
								key={shuttleId}
								title={shuttle.id}
								onClick={() => handleShuttleClick(shuttleId)}
								clickIcon={true}
							/>
						))}
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<h3 className="text-3xl font-bold">Departure Shuttles</h3>
					<div className="flex flex-wrap justify-center gap-4">
						{Object.entries(DepartureShuttlesData).map(
							([shuttleId, shuttle]) => (
								<InfoBox
									key={shuttleId}
									title={shuttle.id}
									onClick={() => handleShuttleClick(shuttleId)}
									clickIcon={true}
								/>
							)
						)}
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<h3 className="text-3xl font-bold">Shuttle Alternatives</h3>
					<div className="flex flex-wrap justify-center gap-4">
						<InfoBox
							title="Pullman bus"
							onClick={() => navigate("/pullman-bus/")}
							clickIcon={true}
						/>
						<InfoBox title="Hire a taxi" clickIcon={false} />
					</div>
				</div>

				<div className="flex flex-col items-center justify-center">
					<h2 className="text-gray-500">
						Want to change shuttles? Contact Adi or Gracie to check
						availability!
					</h2>
					<NavigationButtonGroup includeAllShuttles={false} />
				</div>
			</div>
		</Page>
	);
}
