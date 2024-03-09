import LinkCard from "../components/LinkCard";
import Page from "../components/Page";

const hinduCeremonyImage =
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709942723/GracieShaadiConAdi/hindu_ceremony_art_dmaccx.webp";
const catholicCeremonyImage =
	"https://res.cloudinary.com/djxfhec23/image/upload/v1709942722/GracieShaadiConAdi/catholic-ceremony-art_i6s0tb.webp";
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
