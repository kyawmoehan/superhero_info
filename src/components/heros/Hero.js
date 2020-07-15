import React from "react";
import LazyLoad from "react-lazyload";

const Hero = ({ hero }) => {
  return (
    <div className="card">
      <LazyLoad offset={1200}>
        <img src={hero.images.sm} alt={hero.name} />
      </LazyLoad>
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
