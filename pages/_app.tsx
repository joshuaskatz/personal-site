import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { NavBar } from "../components/NavBar";
import { Layout } from "../layout/Layout";

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Container fluid>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  );
}

export default MyApp;
