import Page from "../components/Page";

const catholicWeddingExplainerEnglish = [
	"https://cdn.discordapp.com/attachments/1157014089592221729/1197053098720505966/1.png?ex=65b9dd92&is=65a76892&hm=4b40ecb389f35615753fb727e45d400aebeba796190552e883f39980835a3853&",
	"https://media.discordapp.net/attachments/1157014089592221729/1197053125987680316/2.png?ex=65b9dd99&is=65a76899&hm=d2a4b1524047ddb3e53df2bbe2ce8ea41536aa04c84f88dfa83357796f0f638b&=&format=webp&quality=lossless&width=1080&height=1080",
	"https://media.discordapp.net/attachments/1157014089592221729/1197053148548845578/3.png?ex=65b9dd9e&is=65a7689e&hm=5ee6ec7df7f4754f348339722722754ec7dcd4fc29f480ddba56e7051dc56c46&=&format=webp&quality=lossless&width=1080&height=1080",
	"https://media.discordapp.net/attachments/1157014089592221729/1197053167079280651/4.png?ex=65b9dda3&is=65a768a3&hm=5682fc770debf5781f6554648870082155777f3ab1e66070e6df031f7a11d830&=&format=webp&quality=lossless&width=1080&height=1080",
];

export default function CatholicCeremonyPage() {
	return (
		<Page>
			<h3 className="text-5xl font-bold">Catholic Ceremony Guide</h3>
			<div className="flex flex-col mx-auto items-center gap-4 divide-y divide-gray-300">
				{catholicWeddingExplainerEnglish.map((imageUrl) => (
					<>
						<img key={imageUrl} src={imageUrl} className="max-w-lg" />
					</>
				))}
			</div>
		</Page>
	);
}
