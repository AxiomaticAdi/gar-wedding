import Page from "../components/Page";

const scheduleImage =
	"https://media.discordapp.net/attachments/1157014089592221729/1197438282833854574/Copy_-_Transparent_Schedule_For_Website.png?ex=65bb444d&is=65a8cf4d&hm=4eeedc33e4b1cbbde391c6583e116c01c11d31d867b76cb1adcbf3ef7b105b59&=&format=webp&quality=lossless&width=906&height=1080";

export default function SchedulePage() {
	return (
		<Page>
			<h3 className="text-5xl font-bold">Schedule</h3>
			<div className="flex flex-col mx-auto items-center gap-6 mt-10 mb-40">
				<img src={scheduleImage} alt="Schedule" />
			</div>
		</Page>
	);
}
