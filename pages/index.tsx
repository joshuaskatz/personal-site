import React from "react";
import { Container } from "react-bootstrap";
import { Name } from "../components/Name";
import { Description } from "../components/Description";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Name />
      <Description />
    </Container>
  );
};

export default HomePage;
