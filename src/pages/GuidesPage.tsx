import LinkCard from "../components/LinkCard";
import Page from "../components/Page";

const hinduCeremonyImage =
	"https://media.discordapp.net/attachments/1157014089592221729/1197060304073396315/bfa6a2a2-c31c-4208-b1bd-cbfa8c5715c7.jpeg?ex=65b9e448&is=65a76f48&hm=89aab5728ebb9bd70f3d5a9ccee2b6831012a7c18cf10e891b6bad8d6eaba534&=&format=webp&width=1080&height=1080";

const catholicCeremonyImage =
	"https://media.discordapp.net/attachments/1157014089592221729/1197061285175636098/f7ffa206-8760-4c04-8ea8-7bfff746cd45.jpeg?ex=65b9e532&is=65a77032&hm=26b05b42d2212f9ca2fde18e46db3974129729b4134b93d69a2774319c991694&=&format=webp&width=1080&height=1080";

const catholicCeremonyImage2 =
	"https://media.discordapp.net/attachments/1157014089592221729/1197062240130568282/98ffbb6b-1332-4ee1-9e10-483d07c60b36.jpeg?ex=65b9e616&is=65a77116&hm=86a2d1763f15faa3932db5562fbc01d63284c96f5b9c5acf5afeb22e1bcd146e&=&format=webp&width=1080&height=1080";
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
					imageUrl={catholicCeremonyImage2}
				/>
			</div>
		</Page>
	);
}
