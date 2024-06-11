import Header from "./layout/Header";

const App = () => {
	return (
		<div>
			<Header />
			<div
				className="bg-primary-subtle d-flex flex-column justify-content-center align-items-center"
				style={{ minHeight: "90vh" }}
			>
				<h1>Software di rendicontazione</h1>
			</div>
		</div>
	);
};

export default App;
