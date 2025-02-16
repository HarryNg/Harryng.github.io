import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { projectsData,skillsData } from '../constants/content';
import '.././styles/components.css';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  const { title, link, description, techStack, image } = projectsData[currentIndex];

  return (
    <section id="projects" className="projects-section section-wrapper" style={{ padding: '4rem 0' }}>
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={8} className="text-center">
            <h2 className="section-title">My Projects</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="text-center">
            <img src={image} alt={title} className="project-image" />
          </Col>
          <Col md={6}>
            <Card className="project-details">
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Link href={link} target="_blank">View Project</Card.Link>
                <Card.Text>{description}</Card.Text>
                <ul className="tech-stack">
                  {techStack.map((tech, index) => {
                    const skill = skillsData.find(skill => skill.name === tech);
                    return (
                      <li key={index} className="tech-item">
                        {skill && <img src={skill.logo} alt={skill.name} className="tech-icon" />}
                        {tech}
                      </li>
                    );
                  })}
                </ul>
                <div className="navigation-arrows">
                  <button className="nav-button" onClick={handlePrev}>&lt;</button>
                  <button className="nav-button" onClick={handleNext}>&gt;</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection; 