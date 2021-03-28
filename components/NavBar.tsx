import React from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const routes: Record<"href" | "title", string>[] = [
  {
    href: "/",
    title: "about",
  },
  {
    href: "/skills",
    title: "skills",
  },
  {
    href: "/projects",
    title: "projects",
  },
  {
    href: "/contact",
    title: "contact",
  },
];

export const NavBar: React.FC = () => {
  return (
    <Row>
      {routes.map(({ href, title }) => (
        <Col xs={{ span: 8, offset: 4 }}>
          <Link href={href}>
            <h5 key={title} className="link">
              {title}
            </h5>
          </Link>
        </Col>
      ))}
      <Col xs={{ span: 8, offset: 4 }}>
        <h5 className="link">
          <a href="Joshua_Katz_Resume.pdf" download>
            résumé
          </a>
        </h5>
      </Col>
    </Row>
  );
};
