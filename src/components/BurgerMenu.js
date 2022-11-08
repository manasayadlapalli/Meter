import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger.css";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <a className="menu-item" href="/">
        Dashboard home
      </a>
      <a className="menu-item" href="/usage">
        Monitor Usage
      </a>
      <a className="menu-item" href="/map">
        SJSU Map
      </a>
      <a className="menu-item" href="/billing">
        Billing
      </a>
      <br />
      <br />
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

export default BurgerMenu;
