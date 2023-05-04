import React from "react";

const Footer = () => {
  return (
    <footer className="b-footer">
      <div className="b-footer__container">
        <img
          src="./images/icon-fb.svg"
          alt="Icono de Facebook"
          className="b-footer__icon"
        />
        <a
          href="https://www.facebook.com/slideinktatto"
          className="link text"
          target="blank"
        >
          Facebook
        </a>
      </div>
      <div className="b-footer__container">
        <img
          src="./images/icon-ig.svg"
          alt="Icono de Instagram"
          className="b-footer__icon"
        />
        <a
          href="https://www.instagram.com/slideinkstudio/"
          className="link text"
          target="blank"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
