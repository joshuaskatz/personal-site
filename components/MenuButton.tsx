import React from "react";
import { Image } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

interface MenuButtonProps {
  state: "open" | "closed";
  onClick: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ state, onClick }) => {
  const props = useSpring({ opacity: "open" });
  const src = state === "closed" ? "icons/menu.svg" : "icons/close.svg";
  return (
    <>
      <Image
        src={src}
        onClick={onClick}
        className={`phoneNavDropdown phoneNavDropdown${
          state === "open" ? "--open" : "--closed"
        }`}
      />
    </>
  );
};
