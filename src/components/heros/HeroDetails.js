import React, { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";

const HeroDetails = ({ id }) => {
  const [hero, setHero] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      const response = await fetch(
        `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${id}.json`
      );
      const data = await response.json();

      console.log(data);
      setHero(data);
      setIsLoading(false);
    };
    fetchHeroData();
  }, [id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <h1>{hero.name}</h1>
      <img src={hero.images.sm} alt={hero.name} />
    </>
  );
};

export default HeroDetails;
