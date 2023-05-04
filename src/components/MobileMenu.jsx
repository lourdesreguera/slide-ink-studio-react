import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showMenu } from "../redux/menu/menu.actions";

const MobileMenu = () => {
  const Scroll = require("react-scroll");
  const scroller = Scroll.scroller;
  const dispatch = useDispatch();

  const scrollToSection = (ev) => {
    dispatch(showMenu());
    scroller.scrollTo(ev.target.innerText.toLowerCase(), {
      smooth: true,
      duration: 600,
    });
  };

  return (
    <nav className="b-mobileNav">
      <Link
        to="/"
        className="link text text--mobileMenu"
        onClick={scrollToSection}
      >
        Home
      </Link>
      <Link
        to="/"
        className="link text text--mobileMenu"
        onClick={scrollToSection}
      >
        Artists
      </Link>
      <Link
        to="/"
        className="link text text--mobileMenu"
        onClick={scrollToSection}
      >
        Contact
      </Link>
    </nav>
  );
};

export default MobileMenu;
