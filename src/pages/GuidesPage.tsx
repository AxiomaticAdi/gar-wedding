import LinkCard from "../components/LinkCard";
import Page from "../components/Page";

const hinduCeremonyImage =
	"https://media.discordapp.net/attachments/385676249458147329/1197237214669717505/OIG.png?ex=65ba890b&is=65a8140b&hm=a076dd12b44cfca68e9017426327a37b360b852b4abaec5b3e58c4b4dd1f8629&=&format=webp&quality=lossless&width=1080&height=1080";
const catholicCeremonyImage =
	"https://media.discordapp.net/attachments/1157014089592221729/1197068020133154857/04c80a6d-8b25-44c0-9ca4-4157aaaba220.jpeg?ex=65b9eb78&is=65a77678&hm=84608793fe7184cc67a015439e9958361c6ca98850aaf2b6f203f70dfe17b942&=&format=webp&width=1080&height=1080";

export default function GuidesPage() {
	return (
		<Page>
			<h3 className="text-5xl font-bold">Guides</h3>
			<div className="flex flex-col mx-auto items-center gap-6 mt-10">
				<LinkCard
					title="Hindu Ceremony"
					path="/guides/hindu-ceremony/"
					imageUrl={hinduCeremonyImage}
				/>
				<LinkCard
					title="Catholic Ceremony"
					path="/guides/catholic-ceremony/"
					imageUrl={catholicCeremonyImage}
				/>
			</div>
		</Page>
	);
}
