import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showMenu } from "../redux/menu/menu.actions";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const dispatch = useDispatch();
  const { isMenuShown } = useSelector((state) => state.menu);

  return (
    <header className="b-header">
      <div className="b-header__logo">
        <img src=".images/logo.png" alt="Logo de Slide Ink Studio" />
      </div>
      <div className="b-header__menu">
        <img
          className="b-header__menu-image"
          src="./images/menu-icon.svg"
          alt="Menú desplegable"
          onClick={() => dispatch(showMenu())}
        />
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
