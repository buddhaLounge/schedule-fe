import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => (
	<Navbar bg="primary" data-bs-theme="dark">
		<Container>
			<Navbar.Brand href="/">TimeSheet</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link href="/rendicontazioni">Rendicontazioni</Nav.Link>
			</Nav>
		</Container>
	</Navbar>
);

export default Header;
