import Page from "../components/Page";

const hinduWeddingExplainer1 =
	"https://media.discordapp.net/attachments/1157014089592221729/1196547861794541658/HinduWeddingPart1.png?ex=65b80709&is=65a59209&hm=e0db414fcfc1f0ddccc19860c8cfd3a752748ef62dfe34a29fdb51f915da0dd9&=&format=webp&quality=lossless&width=760&height=1080";

const hinduWeddingExplainer2 =
	"https://media.discordapp.net/attachments/1157014089592221729/1196549149437472779/HinduWeddingPart2.png?ex=65b8083c&is=65a5933c&hm=833a2ba133aabf78f1684b38f672b3f4e529efd265320a1864049336ded55021&=&format=webp&quality=lossless&width=760&height=1080";

const hinduWeddingExplainer3 =
	"https://media.discordapp.net/attachments/1157014089592221729/1196549233348714556/HinduWeddingPart3.png?ex=65b80850&is=65a59350&hm=43fa6f5f9f962bcf47d7abdc89d8e07c693a641918fdadb510d005fc682f6a3f&=&format=webp&quality=lossless&width=760&height=1080";

export default function HinduCeremonyPage() {
	return (
		<Page>
			<div className="flex flex-col mx-auto items-center">
				<img src={hinduWeddingExplainer1} />
				<img src={hinduWeddingExplainer2} />
				<img src={hinduWeddingExplainer3} />
			</div>
		</Page>
	);
}
