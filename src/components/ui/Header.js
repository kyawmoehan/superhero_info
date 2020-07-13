import React from "react";
import superhero from "../../images/superhero.svg";

const Header = () => {
  return (
    <header className="center">
      <img src={superhero} alt="SuperHero Logo" />
    </header>
  );
};

export default Header;
