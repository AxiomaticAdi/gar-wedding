import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

import { ModalProvider } from "./context/TableModalContext";
import ErrorPage from "./pages/ErrorPage.tsx";
import ShuttleDetailsPage from "./pages/ShuttleDetailsPage.tsx";
import ShuttlesPage from "./pages/ShuttlesPage.tsx";
import ChecklistPage from "./pages/ChecklistPage.tsx";
import GuestDetailsPage from "./pages/GuestDetailsPage.tsx";
import HinduCeremonyPage from "./pages/HinduCeremonyPage.tsx";
import CatholicCeremonyPage from "./pages/CatholicCeremonyPage.tsx";
import GuidesPage from "./pages/GuidesPage.tsx";
import PullmanBusPage from "./pages/PullmanBusPage.tsx";
import SchedulePage from "./pages/SchedulePage.tsx";

const router = createHashRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/guests/:guestFullNameSlug",
		element: <GuestDetailsPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/shuttles/",
		element: <ShuttlesPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/shuttles/:shuttleId",
		element: <ShuttleDetailsPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/pullman-bus/",
		element: <PullmanBusPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/checklist/",
		element: <ChecklistPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/schedule/",
		element: <SchedulePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/guides/",
		element: <GuidesPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/guides/hindu-ceremony/",
		element: <HinduCeremonyPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/guides/catholic-ceremony/",
		element: <CatholicCeremonyPage />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ModalProvider>
			<RouterProvider router={router} />
		</ModalProvider>
	</React.StrictMode>
);
