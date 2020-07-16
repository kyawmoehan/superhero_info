import React from "react";
import { Link } from "react-scroll";
import up from "../../images/up-arrow.svg";

const PageUp = () => {
  return (
    <Link
      activeClass="active"
      to="hero-header"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="page-up"
    >
      <img src={up} alt="Page Up Arrow" />
    </Link>
  );
};

export default PageUp;
