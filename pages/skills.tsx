import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { SkillDesc } from "../components/SkillDesc";

export type language = "typescript" | "javascript" | "python" | "sass" | "css";

export type technology =
  | "react"
  | "graphql"
  | "node"
  | "firebase"
  | "aws"
  | "jest";

const languages: language[] = [
  "typescript",
  "javascript",
  "python",
  "sass",
  "css",
];

const technologies: technology[] = [
  "react",
  "graphql",
  "node",
  "firebase",
  "aws",
  "jest",
];

const skills: React.FC = () => {
  const [desc, setDesc] = useState<language | technology>("typescript");

  const selectedDesc = (skill: language | technology) => (
    <SkillDesc skill={skill} />
  );

  return (
    <Row>
      <Col xs={9}>
        <Row className="d-flex justify-content-end align-items-center icon-row">
          {languages.map((skill: language) => (
            <Col key={skill} xs={1} className="icon-container">
              <Image
                src={`icons/languages/${skill}.svg`}
                className="icon"
                onClick={() => {
                  setDesc(skill);
                }}
              />
            </Col>
          ))}
        </Row>
        <Row className="d-flex justify-content-end align-items-center">
          {technologies.map((skill: technology) => (
            <Col key={skill} xs={1} className="icon-container">
              <Image
                src={`icons/technologies/${skill}.svg`}
                className="icon"
                onClick={() => {
                  setDesc(skill);
                }}
              />
            </Col>
          ))}
        </Row>
      </Col>
      <Col xs={{ span: 2, offset: 1 }} className="d-flex align-items-center">
        {selectedDesc(desc)}
      </Col>
    </Row>
  );
};

export default skills;
