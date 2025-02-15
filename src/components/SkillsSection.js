import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { skillsData } from '../constants/content';
import '.././styles/components.css';

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section" style={{ padding: '4rem 0' }}>
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={8} className="text-center">
            <h2 className="section-title">My Skills</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {skillsData.map((skill) => (
            <Col xs={6} sm={4} md={3} key={skill.name} className="mb-4">
              <Card className="skill-card">
                <Card.Body className="text-center">
                  <img src={skill.logo} alt={skill.name} className="skill-icon" />
                  <Card.Title>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
