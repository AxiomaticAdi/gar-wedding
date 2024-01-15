import ChecklistItem, { ChecklistItemProps } from "../components/ChecklistItem";
import Divider from "../components/Divider";
import Page from "../components/Page";

const mustList: ChecklistItemProps[] = [
	{
		id: 1,
		title: "Got your Passport?",
		description: "Double-check!",
	},
	{
		id: 2,
		title: "Booked Your Flight?",
		description: "If not, it's time to wing it!",
	},
	{
		id: 3,
		title: "Reserved a room?",
		description:
			"Make sure you booked your stay at the wedding venue, or at a nearby hotel.",
	},
	{
		id: 4,
		title: "Sign-Up for a Shuttle?",
		description:
			"You can check your reserved shuttles on this site - and if you didn't sign up for a shuttle and will need a ride, let us know.",
	},
	{
		id: 5,
		title: "Got a plan to grab some pesos?",
		description:
			"While the venue and any large store will accept credit cards, it's best to keep some cash on hand, particularly for taxis, food stands, etc.",
	},
];

const optionalList: ChecklistItemProps[] = [
	{
		id: 1,
		title: "Post-Wedding Mexico City Stay: ",
		description:
			"Planning to explore Mexico City post-wedding? Consider our special room block at Hotel Marquis Reforma.",
	},
	{
		id: 2,
		title: "Check the Weather: ",
		description:
			"Sunny days, cool nights – pack for both! Temperatures in this part of Mexico can range between 90s during the day and 50s-60 at night.",
	},
	{
		id: 3,
		title: "Sunscreen: ",
		description:
			"Because sunburns don't match wedding outfits. Please note that the Catholic ceremony will be outdoors.",
	},
];

export default function ChecklistPage() {
	return (
		<Page>
			<div className="mx-4">
				<div className="flex flex-col gap-4">
					<h2 className="text-2xl text-center font-bold my-auto">
						Don't forget!
					</h2>
					<Divider />
				</div>
				<div className="flex flex-col divide-y justify-center my-2">
					{mustList.map((item) => (
						<ChecklistItem
							id={item.id}
							key={item.id}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
				<div className="flex flex-col gap-4 mt-8">
					<h2 className="text-2xl text-center font-bold my-auto">
						Also consider!
					</h2>
					<Divider />
				</div>
				<div className="flex flex-col divide-y justify-center my-2">
					{optionalList.map((item) => (
						<ChecklistItem
							id={item.id}
							key={item.id}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
			</div>
		</Page>
	);
}
