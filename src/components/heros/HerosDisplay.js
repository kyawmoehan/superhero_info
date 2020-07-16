import React, { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";
import Hero from "./Hero";
import PageUp from "../ui/PageUp";

const HerosDisplay = () => {
  const [heros, setHeros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json"
      );
      const data = await response.json();
      setHeros(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {heros.map((hero) => (
        <Hero key={hero.id} hero={hero} />
      ))}
      <PageUp />
    </section>
  );
};

export default HerosDisplay;
