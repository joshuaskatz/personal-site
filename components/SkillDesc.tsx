import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { language, technology } from "../pages/skills";

interface SkillDescProps {
  skill: language | technology;
}

const skillBody: Partial<Record<language | technology, string>> = {
  css:
    "Used for styling of basic react components, paired with libraries such as bootstrap to create responsive apps.",
  firebase:
    "Implemented authentication and analysis flows via firebase for scalable solutions.",
  graphql:
    "Coupled with ORM's such as Sequelize and TypeORM, I have created performant API with relational databases.",
  javascript:
    "Experience designing fullstack projects with JavaScript libraries and frameworks.",
  jest:
    "Consistently used for test-driven development, whether it be for backend unit testing or with front-end headless testing libraries like puppeteer or detox.",
  node:
    "Used to create backend servers for GraphQL and REST API's, paired with express.",
  postgresql:
    "Database of choice, typically paired with TypeORM for performant GraphQL and REST API's.",
  python:
    "Used for basic data visualization and model mockups while taking a machine learning theory course.",
  react:
    "Created fast and sleek apps using hooks and redux, paired with GraphQL through clients like URQL and Apollo.",
  sass:
    "Prefered method of styling for react components - paired with node-sass. Used to create reusable variables and take advantage of handy functions offered by sass.",
  typescript:
    "Learned this superset of JavaScript to introduce type-safety into app development.",
};

export const SkillDesc: React.FC<SkillDescProps> = ({ skill }) => {
  return (
    <Row className="d-flex align-items-center">
      <h2 className="skill-title">{skill}</h2>
      <p className="skill-body">{skillBody[skill]}</p>
    </Row>
  );
};
