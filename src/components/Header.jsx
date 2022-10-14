import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showMenu } from "../redux/menu/menu.actions";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const dispatch = useDispatch();
  const { isMenuShown } = useSelector((state) => state.menu);

  const Scroll = require("react-scroll");
  const scroller = Scroll.scroller;

  const scrollToSection = (ev) => {
    scroller.scrollTo(ev.target.innerText.toLowerCase(), {
      smooth: true,
      duration: 600,
    });
  };

  return (
    <header className="b-header">
      <div className="b-header__logo">
        <img
          className="b-header__logo"
          src="./images/logo.png"
          alt="Logo de Slide Ink Studio"
        />
      </div>
      <div className="b-header__menu">
        <img
          className="b-header__menu-image"
          src="./images/menu-icon.svg"
          alt="Menú desplegable"
          onClick={() => dispatch(showMenu())}
        />
        <nav className="b-header__menu-desk">
          <Link to='/' className="link text text--deskMenu" onClick={scrollToSection}>
            Home
          </Link>
          <Link to='/' className="link text text--deskMenu" onClick={scrollToSection}>
            Artists
          </Link>
          <Link to='/' className="link text text--deskMenu" onClick={scrollToSection}>
            Contact
          </Link>
        </nav>
      </div>
      <div
        className={
          isMenuShown
            ? "b-header__menu-show b-header__menu-show--open"
            : "b-header__menu-show b-header__menu-show--close"
        }
      >
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
