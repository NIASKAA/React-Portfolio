import { Navbar, Container, Nav } from 'react-bootstrap';
import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap'
import {Link} from 'react-router-dom'; 
import './styles.css';

const Navigation = () => {
  const header = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(header.current, {opacity: 0}, {opacity: 1, duration: 1, stagger: 0.3})
  }, []);

    return (
          <>
            <Navbar collapseOnSelect fixed="top" expand="sm" bg='dark' variant="dark" ref={header}>
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <Nav.Link className="navBtns" as={Link} to={'/'}>Home</Nav.Link>
                    <Nav.Link className="navBtns" as={Link} to={'/about'}>About</Nav.Link>
                    <Nav.Link className="navBtns" as={Link} to={'/projects'}>Projects</Nav.Link>
                    <Nav.Link className="navBtns" as={Link} to={'/contacts'}>Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </>
    );
  }

export default Navigation
