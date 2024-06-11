import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Header from "../layout/Header";

const Error = () => {
	const error = useRouteError();
	if (isRouteErrorResponse(error)) {
		return (
			<div>
				<Header />
				<div
					className="d-flex bg-primary-subtle flex-column justify-content-center align-items-center"
					style={{ minHeight: "90vh" }}
				>
					<h1>Errore {error.status}</h1>
					<h2>{error.statusText}</h2>
				</div>
			</div>
		);
	} else
		return (
			<div>
				<Header />
				<div
					className="d-flex bg-primary-subtle flex-column justify-content-center align-items-center"
					style={{ minHeight: "90vh" }}
				>
					<h1>Errore non specificato</h1>
				</div>
			</div>
		);
};

export default Error;
