export type Guest = {
	id: string;
	firstName: string;
	lastName: string;
	fullName: string;
	rsvp_Haldi: boolean;
	rsvp_Wedding: boolean;
	rsvp_Breakfast: boolean;
	arrivalShuttleId: string;
	departureShuttleId: string;
	receptionTableNumber: string;
};

export type Shuttle = {
	id: string;
	description: string;
	pickupName: string;
	pickupAddress: string;
	pickupTime: string;
	pickupNotes?: string;
	dropoffName: string;
	dropoffAddress: string;
	dropoffTime: string;
	dropoffNotes?: string;
	notes?: string;
};

export type ShuttleOptionsDictionary = {
	[shuttleId: string]: Shuttle;
};
