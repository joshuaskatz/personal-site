import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const languages = ["typescript", "javascript", "python", "sass", "css3"];

const technologies = [
  "react",
  "graphql",
  "nodejs",
  "postgresql",
  "firebase",
  "jest",
  "bootstrap",
];

const skills: React.FC = () => {
  return (
    <Container className="">
      <Col>
        {languages.map((skill) => (
          <Image src={`icons/languages/${skill}.svg`} width={100} />
        ))}
      </Col>
      <Col>
        {technologies.map((skill) => (
          <Image src={`icons/technologies/${skill}.svg`} width={100} />
        ))}
      </Col>
    </Container>
  );
};

export default skills;
