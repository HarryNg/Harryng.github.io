import React from "react";
import { Container, Row, Col, Image, Button, Carousel } from "react-bootstrap";

const InternshipSection = () => {
  const imageUrls = [
    "/Jamk-TB01.jpg",
    "/Jamk-TB02.jpeg",
    "/Jamk-TB03.jpg",
    "/Jamk-TB04.jpg",
    "/Jamk-TB05.jpg"
  ];

  return (
    <section id="intern" className="mb-5">
      <Container>
        <h1 className="text-center mb-4">Jamk TalentBoost Internship 2022</h1>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Carousel id="myCarousel">
              {imageUrls.map((url, index) => (
                <Carousel.Item key={index}>
                  <Image src={url} fluid className="d-block w-100 h-100" alt="..." />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="d-flex justify-content-center mt-3">
              <Button className="carousel-control-prev me-3" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </Button>
              <Button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InternshipSection;
