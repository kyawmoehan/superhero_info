import React from "react";
import superhero from "../../images/superhero.svg";

const Header = () => {
  return (
    <header className="center">
      <img src={superhero} alt="SuperHero Logo" />
      <h1 className="header-title">SuperHero Info</h1>
    </header>
  );
};

export default Header;
