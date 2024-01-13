import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ModalProvider } from "./context/TableModalContext";
import ErrorPage from "./pages/ErrorPage.tsx";
import ShuttleDetailsPage from "./pages/ShuttleDetailsPage.tsx";
import ShuttlesPage from "./pages/ShuttlesPage.tsx";
import ChecklistPage from "./pages/ChecklistPage.tsx";

const router = createBrowserRouter([
	{
		path: "/gar-wedding/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/gar-wedding/shuttles/",
		element: <ShuttlesPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/gar-wedding/shuttles/:shuttleId",
		element: <ShuttleDetailsPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/gar-wedding/checklist/",
		element: <ChecklistPage />,
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
