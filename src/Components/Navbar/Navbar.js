import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
import './styles.css';

const Navigation = () => {
    return (
          <>
            <Navbar collapseOnSelect fixed="top" expand="sm" bg='dark' variant="dark">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <Nav.Link className="btn" as={Link} to={'/'}>Home</Nav.Link>
                    <Nav.Link className="btn" as={Link} to={'/about'}>About</Nav.Link>
                    <Nav.Link className="btn" as={Link} to={'/projects'}>Projects</Nav.Link>
                    <Nav.Link className="btn" as={Link} to={'/contacts'}>Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </>
    );
  }

export default Navigation
