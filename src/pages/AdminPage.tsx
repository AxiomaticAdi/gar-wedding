import { useEffect, useState } from "react";
import Page from "../components/Page";
import { Link } from "react-router-dom";
import { GuestListService } from "../services/GuestListService";
import { alphabeticalLastNameSort, countGuestsByShuttle } from "../logic";
import { Guest } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";

export default function AdminPage() {
	const [guestList, setGuestList] = useState<Guest[]>();

	// On first load
	useEffect(() => {
		// Fetch guests
		if (guestList === undefined) {
			GuestListService.fetchGuestsAsync().then((res) => {
				res.sort(alphabeticalLastNameSort);
				setGuestList(res);
			});
		}
	});

	// if guests not hydrated yet, show loading spinner
	if (guestList === undefined) {
		return (
			<Page>
				<LoadingSpinner />
			</Page>
		);
	}

	const shuttlePassengerCounts = countGuestsByShuttle(guestList);

	return (
		<Page>
			<div className="flex flex-col items-center gap-12">
				<div>
					<h3 className="text-5xl font-bold">Admin Page</h3>
					<p className="my-2 text-lg">Find shuttle passenger lists below</p>
				</div>
				<div className="bg-white shadow-md p-4 rounded-md">
					<table className="table-auto">
						<thead>
							<tr>
								<th className="px-4">Shuttle #</th>
								<th className="px-4">Shuttle Name</th>
								<th className="px-4">Capacity</th>
								<th className="px-4">Passenger Count</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>
									<Link to="/admin/anakin" className="text-blue-500 underline">
										Anakin
									</Link>{" "}
									(Airport),{" "}
									<Link to="/admin/vader" className="text-blue-500 underline">
										Vader
									</Link>{" "}
									(Hotel)
								</td>
								<td>47</td>
								<td>
									{shuttlePassengerCounts.anakin + shuttlePassengerCounts.vader}
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>
									<Link to="/admin/grogu" className="text-blue-500 underline">
										Grogu
									</Link>
								</td>
								<td>47</td>
								<td>{shuttlePassengerCounts.grogu}</td>
							</tr>
							<tr>
								<td>3</td>
								<td>
									<Link
										to="/admin/shakshuka"
										className="text-blue-500 underline"
									>
										Shakshuka
									</Link>
								</td>
								<td>20</td>
								<td>{shuttlePassengerCounts.shakshuka}</td>
							</tr>
							<tr>
								<td>4 & 5</td>
								<td>
									<Link to="/admin/taco" className="text-blue-500 underline">
										Taco
									</Link>
								</td>
								<td>94</td>
								<td>{shuttlePassengerCounts.taco}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</Page>
	);
}
