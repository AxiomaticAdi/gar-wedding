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

const router = createHashRouter([
	{
		path: "/",
		element: <App />,
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
		path: "/checklist/",
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
