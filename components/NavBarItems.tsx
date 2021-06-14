import React from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";

export const routes: Record<"href" | "title", string>[] = [
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

type ColOrder = "first" | "last" | number;
type ColSize = boolean | "auto" | number;
type ColSpec =
  | ColSize
  | {
      span?: number;
      offset?: number;
      order?: ColOrder;
    };

interface NavBarItemsProps {
  colSize: ColSpec;
}

export const NavBarItems: React.FC<NavBarItemsProps> = ({ colSize }) => (
  <>
    {routes.map(({ href, title }) => (
      <Col key={title} xs={colSize}>
        <Link href={href}>
          <h5 key={title} className="link">
            {title}
          </h5>
        </Link>
      </Col>
    ))}
    <Col xs={colSize}>
      <h5 className="link">
        <a href="Joshua_Katz_Resume.pdf" download>
          résumé
        </a>
      </h5>
    </Col>
  </>
);
