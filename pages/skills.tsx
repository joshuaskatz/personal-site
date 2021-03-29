import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { SkillDesc } from "../components/SkillDesc";

export type language = "typescript" | "javascript" | "python" | "sass" | "css";

export type technology =
  | "react"
  | "graphql"
  | "node"
  | "postgresql"
  | "firebase"
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
  "postgresql",
  "firebase",
  "jest",
];

const skills: React.FC = () => {
  const [visibleDesc, setVisibleDesc] = useState(false);
  const [desc, setDesc] = useState<language | technology | null>(null);

  const selectedDesc = (skill: language | technology) => (
    <SkillDesc skill={skill} />
  );

  return (
    <Row>
      <Col xs={visibleDesc ? 9 : 12}>
        <Row className="d-flex justify-content-end align-items-center icon-row">
          {languages.map((skill: language) => (
            <Col key={skill} xs={1} className="icon-container">
              <Image
                src={`icons/languages/${skill}.svg`}
                className="icon"
                onClick={() => {
                  setVisibleDesc(true);
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
                  setVisibleDesc(true);
                  setDesc(skill);
                }}
              />
            </Col>
          ))}
        </Row>
      </Col>
      <Col
        xs={visibleDesc ? { span: 2, offset: 1 } : 0}
        className="d-flex align-items-center"
      >
        {visibleDesc && selectedDesc(desc)}
      </Col>
    </Row>
  );
};

export default skills;
