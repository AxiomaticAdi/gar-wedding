import Page from "../components/Page";

export default function PullmanBusPage() {
	return (
		<Page>
			<div className="flex flex-col items-center gap-12">
				<p className="mb-3">
					If you are unable to use the provided courtesy shuttle service, for
					your convenience we have outlined our preferred method of getting to
					and from the airport and the wedding venue: the{" "}
					<a
						href="https://pullman.mx/"
						className="text-blue-600 hover:text-blue-800"
					>
						Pullman De Morelos
					</a>{" "}
					private bus company.
				</p>
				<h3 className="text-3xl font-bold">Airport to venue</h3>
				<ol className="list-decimal ml-6 mb-6 text-left">
					<li className="mb-3">
						<strong>Arrival at Mexico City Airport</strong> - Upon landing at
						Mexico City Airport, proceed to the ground transportation area.
					</li>
					<li className="mb-3">
						<strong>Purchasing Your Bus Ticket</strong> - Find the{" "}
						<strong>Pullman De Morelos</strong> bus service counter (website:{" "}
						<a
							href="https://pullman.mx/"
							className="text-blue-600 hover:text-blue-800"
						>
							https://pullman.mx/
						</a>
						). Buy a ticket to the <strong>Cuernavaca Casino</strong> bus stop.
						This bus is known for its safety and comfort, providing a pleasant
						start to your journey.
					</li>
					<li className="mb-3">
						<strong>Bus Ride to Cuernavaca Casino</strong> - Board the bus and
						enjoy the scenic route to Cuernavaca Casino. It's a great
						opportunity to experience the beautiful Mexican landscape.
					</li>
					<li className="mb-3">
						<strong>Taxi or Uber to venue</strong> - From this location you can
						call an Uber to pick you up and take you the remaining distance. If
						you have any trouble getting a ride, please walk to the Casino and
						ask for a taxi, or call the venue.
					</li>
				</ol>

				<h3 className="text-3xl font-bold">Venue to airport</h3>
				<ol className="list-decimal ml-6 mb-6 text-left">
					<li className="mb-3">
						<strong>Purchase Your Bus Ticket Online</strong> - Visit the Pullman
						De Morelos website (
						<a
							href="https://pullman.mx/"
							className="text-blue-600 hover:text-blue-800"
						>
							https://pullman.mx/
						</a>
						) to purchase your bus ticket in advance. Select a ticket from{" "}
						<strong>Cuernavaca Casino</strong> directly to{" "}
						<strong>Mexico City Airport</strong>.
					</li>
					<li className="mb-3">
						<strong>Arrange a Taxi to Cuernavaca Casino</strong> - There are
						generally not enough Uber drivers in the area near the venue, so
						please ask the concierge at Hacienda Vista Hermosa to arrange a taxi
						for you to the Cuernavaca Casino bus stop. Ensure you leave with
						enough time to catch your bus comfortably.
					</li>
					<li className="mb-3">
						<strong>Board the Bus to Mexico City Airport</strong> - Once at the
						Cuernavaca Casino, locate your Pullman De Morelos bus and board it
						for your trip to the airport. Enjoy the ride!
					</li>
				</ol>
			</div>
		</Page>
	);
}
