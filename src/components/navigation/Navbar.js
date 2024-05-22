
import { Navbar, Container, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "assets/img/Logo.png";




function MyNavbar() {
    return (
        <Navbar className="navBg" expand="lg">
            <Container>
                <div>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="..."></img>
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="Link1" as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/Destination"}>Destination</Nav.Link>
                            <Nav.Link as={Link} to={"/Tour"}>Tour</Nav.Link>
                            <Nav.Link as={Link} to={"/Blog"}>Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <form className="d-flex">
                    <button className="btnNav1" type="button">Login</button>
                </form>
            </Container>
        </Navbar>

    )
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(MyNavbar);
