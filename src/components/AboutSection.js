import React from "react";
import { Container, Row, Col} from "react-bootstrap";

const AboutSection = () => {

  return (
    <section id="about" className="mb-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-start">
            <h2 className="d-flex justify-content-start text-muted">&lt;a little about me&gt;</h2>
            <p>
              I have some experience in Front-end web development with Javascript and React, and I really enjoy learning new things and improving my abilities.
              I'm really passionate about Full-Stack Application development, and I find that it motivates me to work hard and stay focused. <br/><br/>
              I'm always looking for new challenges and opportunities to grow, and I think that I could make a valuable contribution to any team or organization that I work with.<br/>
              The main characteristic of my work has been simple:<br/>
              <span className="text-muted">"Get things done. Fast."</span>
            </p>
            <h2 className="d-flex justify-content-end text-muted">&lt;/a little about me&gt;</h2><br/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
