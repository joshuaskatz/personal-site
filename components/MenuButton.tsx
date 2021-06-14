import React from "react";
import { Image } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

interface MenuButtonProps {
  state: "open" | "closed";
  onClick: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ state, onClick }) => {
  const [props, set] = useSpring(() => ({
    opacity: 1,
  }));

  const handleOnClick = () => {
    onClick();
    set({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });
  };

  const src = state === "closed" ? "icons/menu.svg" : "icons/close.svg";

  return (
    <animated.div style={props}>
      <Image
        src={src}
        onClick={handleOnClick}
        className={`phoneNavDropdown phoneNavDropdown${
          state === "open" ? "--open" : "--closed"
        }`}
      />
    </animated.div>
  );
};
