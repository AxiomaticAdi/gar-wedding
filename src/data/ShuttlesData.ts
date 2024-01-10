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
		id: "Anakin",
		description: "12PM @ Airport",
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
		id: "Vader",
		description: "12:30PM @ City",
		pickupName: "City",
		pickupAddress: hotelAddress,
		pickupTime: "08:00",
		pickupNotes: "Front door",
		dropoffName: "Venue",
		dropoffAddress: venueAddress,
		dropoffTime: "08:30",
		dropoffNotes: "Back entrance",
	},
	grogu: {
		id: "Grogu",
		description: "3PM @ Airport",
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
		id: "Shakshuka",
		description: "7AM @ Venue",
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
		id: "Taco",
		description: "11AM @ Venue",
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

export const allShuttleNames = Object.keys(allShuttlesData);
