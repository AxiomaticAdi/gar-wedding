import InfoBox from "../components/InfoBox";
import Page from "../components/Page";

export default function ShuttlesPage() {
	return (
		<Page>
			<div className="flex flex-col items-center gap-12">
				<div className="flex flex-col items-center justify-center gap-4">
					<h3 className="text-5xl font-bold">Arrival Shuttles</h3>
					<div className="flex flex-wrap gap-4">
						<InfoBox title={"Shakshuka"} description={"dkfe"} />
						<InfoBox title={"Shakshuka"} description={"dkfe"} />
						<InfoBox title={"Shakshuka"} description={"dkfe"} />
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<h3 className="text-5xl font-bold">Departure Shuttles</h3>
					<div className="flex flex-wrap gap-4">
						<InfoBox title={"Shakshuka"} description={"dkfe"} />
						<InfoBox title={"Shakshuka"} description={"dkfe"} />
						<InfoBox title={"Shakshuka"} description={"dkfe"} />
					</div>
				</div>
			</div>
		</Page>
	);
}
