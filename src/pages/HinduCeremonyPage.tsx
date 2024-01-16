import { useState } from "react";
import Page from "../components/Page";
import Tabs from "../components/Tabs";

const hinduWeddingExplainerEnglish = [
	"https://media.discordapp.net/attachments/1157014089592221729/1196547861794541658/HinduWeddingPart1.png?ex=65b80709&is=65a59209&hm=e0db414fcfc1f0ddccc19860c8cfd3a752748ef62dfe34a29fdb51f915da0dd9&=&format=webp&quality=lossless&width=760&height=1080",
	"https://media.discordapp.net/attachments/1157014089592221729/1196549149437472779/HinduWeddingPart2.png?ex=65b8083c&is=65a5933c&hm=833a2ba133aabf78f1684b38f672b3f4e529efd265320a1864049336ded55021&=&format=webp&quality=lossless&width=760&height=1080",
	"https://media.discordapp.net/attachments/1157014089592221729/1196549233348714556/HinduWeddingPart3.png?ex=65b80850&is=65a59350&hm=43fa6f5f9f962bcf47d7abdc89d8e07c693a641918fdadb510d005fc682f6a3f&=&format=webp&quality=lossless&width=760&height=1080",
];

const hinduWeddingExplainerSpanish = [
	"https://media.discordapp.net/attachments/1157014089592221729/1196736259633192971/templett_248636897.png?ex=65b8b67e&is=65a6417e&hm=203b0817a6e0049c0d9dc0e9368783963363acd0a9b00b508a53e10f55991f5d&=&format=webp&quality=lossless&width=760&height=1080",
	"https://media.discordapp.net/attachments/1157014089592221729/1196736310929539072/templett_248636898.png?ex=65b8b68a&is=65a6418a&hm=1825c0c2bc0b5768b69061d0d0e2c2bb4cf81d2be917199dfb922e4bf6819649&=&format=webp&quality=lossless&width=760&height=1080",
	"https://media.discordapp.net/attachments/1157014089592221729/1196736350171447327/templett_248636895.png?ex=65b8b694&is=65a64194&hm=2c9e2b59f88903cff4d79fb2582a8b01ae4ae8b0ea4aafb48931ff8163625a50&=&format=webp&quality=lossless&width=760&height=1080",
];

export default function HinduCeremonyPage() {
	const [selectedTab, setSelectedTab] = useState<string>("English");

	return (
		<Page>
			<Tabs
				tabs={["English", "Español"]}
				currentTab={selectedTab}
				setCurrentTab={setSelectedTab}
			/>
			<div className="flex flex-col mx-auto items-center">
				{selectedTab === "English"
					? hinduWeddingExplainerEnglish.map((imageUrl) => (
							<img key={imageUrl} src={imageUrl} />
						))
					: hinduWeddingExplainerSpanish.map((imageUrl) => (
							<img key={imageUrl} src={imageUrl} />
						))}
			</div>
		</Page>
	);
}
