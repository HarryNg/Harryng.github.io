import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const SkillsSection = () => {
  const skills = [
    {
      logo: "/Python_Icon.png",
      name: "Python",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris velit.",
    },
    {
      logo: "/Javascript_Icon.png",
      name: "Javascript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris velit.",
    },
    {
      logo: "/logo192.png",
      name: "React",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris velit.",
    },
    {
      logo: "/Csharp_Icon.png",
      name: "C#",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris velit.",
    },
    {
      logo: "/Linux_Icon.png",
      name: "Linux",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris velit.",
    },
    {
      logo: "/Git_Icon.png",
      name: "Git",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris velit.",
    },
    {
      logo: "Azure_Icon.png",
      name: "Azure",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris velit.",
    },
    {
      logo: "/Agile_Icon.png",
      name: "Agile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris velit.",
    },
  ];

  return (
    <section id="skills" className="mb-5">
      <Container>
        <Row className="justify-content-center mb-2">
          <Col lg={8} className="text-center">
            <h2>Skills</h2>
            
          </Col>
        </Row>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col xs={6} md={3} key={index} className="card border-light mb-3">
              <Image src={skill.logo} fluid thumbnail className="border-0 fit-img mx-auto my-auto" />
              <h4>{skill.name}</h4>
              {/* <p>{skill.description}</p> */}
              
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
