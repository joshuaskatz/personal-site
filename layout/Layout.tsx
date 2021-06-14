import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavBar } from "../components/NavBar";
import { useScreenType } from "./useScreenSize";

export const Layout: React.FC = ({ children }) => {
  const screenType = useScreenType();

  if (screenType === "isDesktop" || screenType === "isDesktopTablet") {
    return (
      <Row>
        <Col xs={9} className="d-flex align-items-center column">
          {children}
        </Col>
        <Col xs={3} className="d-flex align-items-center column">
          <NavBar />
        </Col>
      </Row>
    );
  }

  if (screenType === "isTabletPhone" || screenType === "isPhone") {
    return (
      <Row>
        <NavBar />
        {children}
      </Row>
    );
  }

  return null;
};
