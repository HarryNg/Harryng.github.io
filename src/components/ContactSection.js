import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Send form data to server using AJAX
    // Clear form fields after successful submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="mb-5 section-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title">Let's Chat</h2>
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Col >
            <Form lg={6} className="form-inline">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              
            </Form>
          </Col>
          <Col lg={12}> 
          <Form.Group controlId="formMessage"  >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                Submit
              </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
