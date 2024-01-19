import { ShuttleOptionsDictionary } from "../types";

const airportPickupAddress =
	"Aeropuerto Internacional Benito Juárez, Terminal 1, Room F (between gates 7 & 8) next to Fast Food";

const airportDropoffAddress =
	"Aeropuerto Internacional Benito Juárez, Terminal 1";

const hotelAddress =
	"Av. P.º de la Reforma 465, Cuauhtémoc, 06500 Ciudad de México, CDMX, Mexico";

const venueAddress =
	"Hacienda Vista Hermosa, Carretera Alpuyeca Tequesquitengo Km 7, 62680 San José Vista Hermosa, Mor., Mexico";

export const ArrivalShuttlesData: ShuttleOptionsDictionary = {
	anakin: {
		id: "Anakin",
		description: "12 PM @ Airport",
		pickupName: "Airport",
		pickupAddress: airportPickupAddress,
		pickupTime: "12:00 PM",
		pickupNotes:
			"Pickup will be at Terminal 1. Folks landing at Terminal 2 will need to take the Aerotrén or public bus service.",
		dropoffName: "Venue",
		dropoffAddress: venueAddress,
		dropoffTime: "Expected to reach the venue around 3:30 PM",
		dropoffNotes:
			"Note that this shuttle will make a stop in Mexico City to pick up guests who arrived early to explore. Hope you'll have a moment to grab some tacos. Thanks for your patience!",
	},
	vader: {
		id: "Vader",
		description: "12:30 PM @ Hotel",
		pickupName: "Hotel Marquis Reforma",
		pickupAddress: hotelAddress,
		pickupTime: "12:30 PM",
		pickupNotes:
			"Note that this shuttle will already have some passengers who got on at the airport.",
		dropoffName: "Venue",
		dropoffAddress: venueAddress,
		dropoffTime: "Expected to reach the venue around 3:30 PM",
	},
	grogu: {
		id: "Grogu",
		description: "3:15 PM @ Airport",
		pickupName: "Airport",
		pickupAddress: airportPickupAddress,
		pickupTime: "3:15 PM",
		pickupNotes:
			"Pickup will be at Terminal 1. Folks landing at Terminal 2 will need to take the Aerotrén or public bus service. This is the latest courtesy shuttle we are able to offer. If you happen to miss this shuttle, please consider the Pullman bus or a private vehicle hire.",
		dropoffName: "Venue",
		dropoffAddress: venueAddress,
		dropoffTime: "Expected to reach the venue around 7 PM",
		notes:
			"Mexico city traffic at this time can be pretty crazy - your trip will take about 3.5 hours. Please plan to bring some food and entertainment!",
	},
};

export const DepartureShuttlesData: ShuttleOptionsDictionary = {
	shakshuka: {
		id: "Shakshuka",
		description: "7:15 AM to Airport",
		pickupName: "Venue",
		pickupAddress: venueAddress,
		pickupTime: "7:15 AM",
		pickupNotes: "Shuttle will depart from the road near the lobby",
		dropoffName: "Airport",
		dropoffAddress: airportDropoffAddress,
		dropoffTime: "10:00 AM",
	},
	taco: {
		id: "Taco",
		description: "11 AM to City",
		pickupName: "Venue",
		pickupAddress: venueAddress,
		pickupTime: "11 AM",
		pickupNotes: "Front door",
		dropoffName: "Hotel Marquis Reforma",
		dropoffAddress: hotelAddress,
		dropoffTime: "Expected to reach around 1:30 PM",
		notes:
			"There may be a group of folks that will head straight to the airport from here - consider carpooling!",
	},
};

export const allShuttlesData: ShuttleOptionsDictionary = {
	...ArrivalShuttlesData,
	...DepartureShuttlesData,
};

export const allShuttleNames = Object.keys(allShuttlesData);
