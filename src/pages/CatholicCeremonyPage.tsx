import Page from "../components/Page";

const catholicWeddingExplainerEnglish = [
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709943274/GracieShaadiConAdi/Catholic%20Ceremony/CatholicGuide1_nupi3a.png",
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709943275/GracieShaadiConAdi/Catholic%20Ceremony/CatholicGuide2_bpneca.png",
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709943277/GracieShaadiConAdi/Catholic%20Ceremony/CatholidGuide3_ptvwtw.png",
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709943273/GracieShaadiConAdi/Catholic%20Ceremony/CatholicGuide4_bg1ngx.png",
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
