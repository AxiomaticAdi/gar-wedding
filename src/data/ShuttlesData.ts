import { ShuttleOptionsDictionary } from "../types";

const airportAddress =
	"Aeropuerto Internacional Benito Juárez, Av. Capitán Carlos León S/N, Peñón de los Baños, Venustiano Carranza, 15620 Ciudad de México, CDMX, Mexico";
const venueAddress =
	"Hacienda Vista Hermosa, Carretera Alpuyeca Tequesquitengo Km 7, 62680 San José Vista Hermosa, Mor., Mexico";

export const ArrivalShuttlesData: ShuttleOptionsDictionary = {
	// TODO: Change Shakshuka to Anakin + Vader
	"Shakshuka: 12PM @ Airport": {
		id: "Anakin: 12PM @ City",
		pickupName: "Shakshuka",
		pickupAddress: airportAddress,
		pickupTime: "08:00",
		pickupNotes: "Front door",
		dropoffName: "Venue",
		dropoffAddress: venueAddress,
		dropoffTime: "08:30",
		dropoffNotes: "Back entrance",
		notes: "Regular route",
	},
	"Shakshuka: 12:30PM @ City": {
		id: "Vader: 12:30PM @ City",
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
	"Einstein: 3PM @ Airport": {
		id: "Einstein: 3PM @ Airport",
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
	"Shakshuka: 12PM @ Airport": {
		id: "Anakin: 12PM @ City",
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
	"Shakshuka: 12:30PM @ City": {
		id: "Vader: 12:30PM @ City",
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
	"Einstein: 3PM @ Airport": {
		id: "Einstein: 3PM @ Airport",
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
