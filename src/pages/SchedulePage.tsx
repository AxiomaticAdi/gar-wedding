import Page from "../components/Page";

const scheduleImage =
	"https://media.discordapp.xyz/attachments/1157014089592221729/1197668001407844514/Copy_-_Transparent_Schedule_For_Website_1.png?ex=65bc1a3f&is=65a9a53f&hm=d182f5944487132978fde42a22169a49f45b1824f660ea68b2ebbe5a7745808c&=&format=webp&quality=lossless&width=906&height=1080";
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
