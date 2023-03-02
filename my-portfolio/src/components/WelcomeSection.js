import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '.././styles/components.css';

const WelcomeSection = () => {
  return (
    <section id="welcome" className="mb-3">
      <Container>
        <Row className="justify-content-center align-items-center vh-100 mb-4">
          <Col xs={6} sm={7} lg={6} className="text-center">
            <h1>Hi, i'm <span className="present">Hai Nguyen</span><br/>
            <span className="fade-in">Future</span> Full-Stack developer
            </h1>
            <p>
              Graduating from Jamk UAS in Spring 2024 <br/>
              2 years of web design and development. Finland based.
            </p>
            
          </Col>
          <Col xs={6} sm={5} lg={6}>
            <img src={process.env.PUBLIC_URL + '/profile002.jpg'}  alt="profile-img" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WelcomeSection;
