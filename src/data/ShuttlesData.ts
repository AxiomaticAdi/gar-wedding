import { ShuttleOptionsDictionary } from "../types";

const airportAddress =
	"Aeropuerto Internacional Benito Juárez, Av. Capitán Carlos León S/N, Peñón de los Baños, Venustiano Carranza, 15620 Ciudad de México, CDMX, Mexico";
const hotelAddress =
	"Av. P.º de la Reforma 465, Cuauhtémoc, 06500 Ciudad de México, CDMX, Mexico";
const venueAddress =
	"Hacienda Vista Hermosa, Carretera Alpuyeca Tequesquitengo Km 7, 62680 San José Vista Hermosa, Mor., Mexico";

export const ArrivalShuttlesData: ShuttleOptionsDictionary = {
	// TODO: Change Shakshuka to Anakin + Vader
	anakin: {
		id: "Anakin: 12PM @ City",
		name: "Anakin",
		pickupName: "Airport",
		pickupAddress: airportAddress,
		pickupTime: "08:00",
		pickupNotes: "Front door",
		dropoffName: "Venue",
		dropoffAddress: venueAddress,
		dropoffTime: "08:30",
		dropoffNotes: "Back entrance",
		notes: "Regular route",
	},
	vader: {
		id: "Vader: 12:30PM @ City",
		name: "Vader",
		pickupName: "Hotel Marquis Reforma",
		pickupAddress: hotelAddress,
		pickupTime: "08:00",
		pickupNotes: "Front door",
		dropoffName: "Venue",
		dropoffAddress: venueAddress,
		dropoffTime: "08:30",
		dropoffNotes: "Back entrance",
		notes: "Regular route",
	},
	grogu: {
		id: "Einstein: 3PM @ Airport",
		name: "Grogu",
		pickupName: "Shakshuka",
		pickupAddress: "123 Main St",
		pickupTime: "08:00",
		pickupNotes: "Front door",
		dropoffName: "Venue",
		dropoffAddress: venueAddress,
		dropoffTime: "08:30",
		dropoffNotes: "Back entrance",
		notes: "Regular route",
	},
};

export const DepartureShuttlesData: ShuttleOptionsDictionary = {
	// TODO: Change Shakshuka to Anakin + Vader
	shakshuka: {
		id: "Anakin: 12PM @ City",
		name: "Shakshuka",
		pickupName: "Venue",
		pickupAddress: venueAddress,
		pickupTime: "08:00",
		pickupNotes: "Front door",
		dropoffName: "Airport",
		dropoffAddress: airportAddress,
		dropoffTime: "08:30",
		dropoffNotes: "Back entrance",
		notes: "Regular route",
	},
	taco: {
		id: "Vader: 12:30PM @ City",
		name: "Taco",
		pickupName: "Shakshuka",
		pickupAddress: venueAddress,
		pickupTime: "08:00",
		pickupNotes: "Front door",
		dropoffName: "Airport",
		dropoffAddress: airportAddress,
		dropoffTime: "08:30",
		dropoffNotes: "Back entrance",
		notes: "Regular route",
	},
};

export const allShuttlesData: ShuttleOptionsDictionary = {
	...ArrivalShuttlesData,
	...DepartureShuttlesData,
};
