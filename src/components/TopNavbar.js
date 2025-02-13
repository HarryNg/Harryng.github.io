import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NAVIGATION_LINKS } from '../constants/content';
import { useScrollEffect } from '../hooks/useScrollEffect';
import '.././styles/components.css';

const TopNavbar = () => {
  const scrolled = useScrollEffect(50);

  return (
    <Navbar 
      fixed="top" 
      bg={scrolled ? 'light' : 'dark'}
      variant={scrolled ? 'light' : 'dark'} 
      expand="lg"
      className={`transition-all ${scrolled ? 'shadow-sm' : ''}`}
      style={{ zIndex: 1000 }}
    >
      <Container>
        <Navbar.Brand href="#home" className="pointer">
          {/* logo  */}
          <span className={scrolled ? 'text-dark' : 'text-light'}>
            Your Name
          </span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          className={scrolled ? '' : 'navbar-dark'}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {NAVIGATION_LINKS.map(({ href, label }) => (
              <Nav.Link 
                key={href} 
                href={href}
                className={`nav-link pointer ${scrolled ? 'text-dark' : 'text-light'}`}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar; 