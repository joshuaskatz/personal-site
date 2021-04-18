import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useScreenType } from "../layout/useScreenSize";
import { MenuButton } from "./MenuButton";
import { NavBarItems } from "./NavBarItems";

export const NavBar: React.FC = () => {
  const [isPhoneDropdown, setIsPhoneDropDown] = useState(false);
  const screenType = useScreenType();

  const colSize = () => {
    switch (screenType) {
      case "isDesktop":
        return { span: 8, offset: 4 };
      case "isDesktopTablet":
        return { span: 9, offset: 3 };
      case "isTabletPhone":
        return;
      case "isPhone":
        return 12;
    }
  };

  const handleOnPhoneDropdownClick = () => setIsPhoneDropDown(!isPhoneDropdown);

  if (screenType === "isPhone") {
    return (
      <Row>
        <Col>
          <MenuButton
            state={isPhoneDropdown ? "open" : "closed"}
            onClick={() => handleOnPhoneDropdownClick()}
          />
        </Col>
        {isPhoneDropdown && <NavBarItems colSize={colSize()} />}
      </Row>
    );
  }

  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <NavBarItems colSize={colSize()} />
      </Row>
    </Container>
  );
};
