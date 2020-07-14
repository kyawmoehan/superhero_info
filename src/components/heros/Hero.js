import React from "react";

const Hero = ({ hero }) => {
  return (
    <div className="card">
      <img src={hero.images.sm} alt={hero.name} />
      <div className="info">
        <h1>{hero.name}</h1>
        <p>First Appearance : {hero.biography.firstAppearance}</p>
        <p>Publisher : {hero.biography.publisher}</p>
        <p>Alignment: {hero.biography.alignment}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Hero;
