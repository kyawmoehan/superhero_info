import React from "react";
import Hero from "./Hero";

const HerosGrid = ({ heros, isLoading }) => {
  return isLoading ? (
    <h1>Loading.....</h1>
  ) : (
    <section className="cards">
      {heros.map((hero) => (
        <Hero key={hero.id} hero={hero} />
      ))}
    </section>
  );
};

export default HerosGrid;
