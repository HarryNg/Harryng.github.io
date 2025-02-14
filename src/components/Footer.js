import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SOCIAL_LINKS } from '../constants/content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const getIcon = (iconName) => {
  const icons = {
    faGithub,
    faLinkedin,
    faTwitter
  };
  return icons[iconName];
};

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start">
            <h5>Hai Nguyen</h5>
            <p className="mb-0">Full Stack Developer</p>
          </Col>
          <Col md={4} className="text-center my-3 my-md-0">
            <div className="social-links">
              {SOCIAL_LINKS.map(({ platform, url, icon }) => (
                <a
                  key={platform}
                  href={url}
                  className="mx-2 text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={getIcon(icon)} size="lg" />
                </a>
              ))}
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <p className="mb-0">© {new Date().getFullYear()} All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 