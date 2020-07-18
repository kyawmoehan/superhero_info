import React from "react";
import { Link } from "@reach/router";
import superhero from "../../images/superhero.svg";

const Header = () => {
  return (
    <header className="center" id="hero-header">
      <Link to="/" className="center header-link">
        <img src={superhero} alt="SuperHero Logo" />
        <h1 className="header-title">SuperHeros Info</h1>
      </Link>
    </header>
  );
};

export default Header;
