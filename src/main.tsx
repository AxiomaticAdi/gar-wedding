import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ModalProvider } from "./context/TableModalContext";
import ErrorPage from "./pages/ErrorPage.tsx";
import ShuttleDetails from "./pages/ShuttleDetails.tsx";
import Shuttles from "./pages/Shuttles.tsx";

const router = createBrowserRouter([
	{
		path: "/gar-wedding/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/gar-wedding/shuttles/",
		element: <Shuttles />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/gar-wedding/shuttles/:shuttleId",
		element: <ShuttleDetails />,
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
