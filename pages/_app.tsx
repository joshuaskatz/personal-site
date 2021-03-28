import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { NavBar } from "../components/NavBar";

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Container fluid>
      <Row>
        <Col xs={8} className="d-flex align-items-center column">
          <Component {...pageProps} />
        </Col>
        <Col xs={4} className="d-flex align-items-center column">
          <NavBar />
        </Col>
      </Row>
    </Container>
  );
}

export default MyApp;
