import Page from "../components/Page";

const scheduleImage =
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709943374/GracieShaadiConAdi/Transparent_Wedding_Schedule_muevxt.png";
export default function SchedulePage() {
	return (
		<Page>
			<h3 className="text-5xl font-bold">Schedule</h3>
			<div className="flex flex-col items-center gap-6 mt-10 mb-40 mx-2">
				<img src={scheduleImage} alt="Schedule" />
			</div>
		</Page>
	);
}
