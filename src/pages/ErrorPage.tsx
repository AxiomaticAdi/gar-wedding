import { Link, useRouteError } from "react-router-dom";
import Page from "../components/Page";
import CustomButton from "../components/CustomButton";

function isErrorWithMessageAndStatusText(
	error: unknown
): error is { message: string; statusText: string } {
	return (
		typeof error === "object" &&
		error !== null &&
		"message" in error &&
		"statusText" in error
	);
}

const errorMessageImage =
	"https://media.discordapp.net/attachments/1157014089592221729/1194503875315630100/ErrorPage.webp?ex=65b0976c&is=659e226c&hm=5806d4aa267df5337e337ecb4764d31b8bf0c0e0c6c909fa9a5cfd8267ebc281&=&format=webp&width=1182&height=1182";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<Page>
			<div className="flex flex-col items-center justify-center">
				<img
					className="rounded-full py-8 grayscale"
					src={errorMessageImage}
					width={"300px"}
				/>
				<h1 className="text-4xl font-bold">Oops!</h1>
				<div>Sorry, an unexpected error has occurred.</div>
				<div>
					{isErrorWithMessageAndStatusText(error) ? (
						<i>{error.statusText || error.message}</i>
					) : null}
				</div>
				<Link to={"/gar-wedding/"} className="pt-4">
					<CustomButton>Home</CustomButton>
				</Link>
			</div>
		</Page>
	);
}
