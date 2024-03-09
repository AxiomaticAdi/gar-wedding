import { useState } from "react";
import Page from "../components/Page";
import Tabs from "../components/Tabs";

const hinduWeddingExplainerEnglish = [
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709942285/GracieShaadiConAdi/Hindu%20Ceremony%20-%20English/HinduWeddingPart1_wyy66w.png",
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709942285/GracieShaadiConAdi/Hindu%20Ceremony%20-%20English/HinduWeddingPart2_rzsatn.png",
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709942286/GracieShaadiConAdi/Hindu%20Ceremony%20-%20English/HinduWeddingPart3_dvha2z.png",
];

const hinduWeddingExplainerSpanish = [
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709942417/GracieShaadiConAdi/Hindu%20Ceremony%20-%20Spanish/HindWeddingPart1_Spanish_ncgmdv.png",
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709942417/GracieShaadiConAdi/Hindu%20Ceremony%20-%20Spanish/HinduWeddingPart2_Spanish_njoenj.png",
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709942417/GracieShaadiConAdi/Hindu%20Ceremony%20-%20Spanish/HinduWeddingPart3_Spanish_ygzey7.png",
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
