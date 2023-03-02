import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faFolder} from "@fortawesome/free-solid-svg-icons";
import { faGit } from '@fortawesome/free-brands-svg-icons';
const portfolioContent = [
  {
    icon: faFolder,
    header: "FinInNote",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a leo bibendum, aliquet nunc eget, commodo tellus.",
    tags: ["Javascript", "School", "Frontend"],
    link: "https://harryng-github-io.vercel.app/PM-Webpage/index.html"
  },
  {
    icon: faEnvelope,
    header: "Ally's Kitchen",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a leo bibendum, aliquet nunc eget, commodo tellus.",
    tags: ["Javascript", "Client", "Design", "Frontend"],
    link: "https://harryng-github-io.vercel.app/allykitchen/index.html"
  },
  {
    icon: faEnvelope,
    header: "The Rosa",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a leo bibendum, aliquet nunc eget, commodo tellus.",
    tags: ["Javascript", "Personal", "Frontend"],
    link: "https://harryng-github-io.vercel.app/the-rosa/index.html"
  },
  {
    icon: faPhone,
    header: "Dumulix",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a leo bibendum, aliquet nunc eget, commodo tellus.",
    tags: ["Javascript", "Client", "Logistics", "Design", "Frontend"],
    link: "https://harryng-github-io.vercel.app/Dumulix/index.html"
  },
  {
    icon: faGit,
    header: "Bank Management System",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a leo bibendum, aliquet nunc eget, commodo tellus.",
    tags: ["Python", "Backend", "Personal", "School"],
    link: "https://github.com/HarryNg/HaiNg-Hands-On/blob/main/Python-Projects/bankManagement-storage/bankManagement.py"
  },
  {
    icon: faGit,
    header: "Employee Management System",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a leo bibendum, aliquet nunc eget, commodo tellus.",
    tags: ["Python", "Backend", "Personal", "School"],
    link: "https://github.com/HarryNg/HaiNg-Hands-On/tree/main/Python-Projects/employeeMnt"
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="container my-5">
        <h1 className="text-center">Portfolio</h1>
      <Row>
        {portfolioContent.map((item, index) => (
          <Col md={4} key={index}>
            <a href={item.link} target="_blank" className="text-decoration-none text-dark" rel="noreferrer">
            <Card className="h-100">
              <Card.Header className="card-img-icons">
                <FontAwesomeIcon icon={item.icon} className="top-left-icon mb-1" style={{ width: '32px', height: '32px' }} />
                {/* <h3>{item.header}</h3> */}
              </Card.Header>
              <Card.Body className="fit-body">
                <h4>{item.header}</h4>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
              <Card.Footer className="overflow-auto p-2">
                <small className="text-muted ">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="d-inline-block mt-1 me-2 border rounded p-1 bg-light bg-gradient border-dark">
                      {tag}
                    </span>
                  ))}
                </small>
              </Card.Footer>
            </Card>
            </a>
          </Col>
          
        ))}
      </Row>
    </section>
  );
};

export default PortfolioSection;
