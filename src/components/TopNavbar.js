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
      expand="lg"
      className={`transition-all ${scrolled ? 'shadow-sm' : ''}`}
      style={{ 
        zIndex: 1000,
        backgroundColor: '#ff607e', // Pink background
      }}
    >
      <Container>
        <Navbar.Brand href="#home" className="pointer">
          <span style={{ color: '#ba68c8' }}> {/* Light purple for logo */}
            My Portfolio
          </span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          style={{ borderColor: '#ffcddf' }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {NAVIGATION_LINKS.map(({ href, label }) => (
              <Nav.Link 
                key={href} 
                href={href}
                className="nav-link pointer"
                style={{ 
                  color: '#ffcddf', // Light pink for text
                  '&:hover': {
                    color: '#ffffff',
                  }
                }}
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