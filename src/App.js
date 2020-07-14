import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import Search from "./components/heros/Search";
import HeroGrid from "./components/heros/HerosGrid";
import "./App.css";

function App() {
  const [heros, setHeros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json"
      );
      const data = await response.json();
      console.log(data);
      setHeros(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      <Search />
      <HeroGrid heros={heros} isLoading={isLoading} />
    </div>
  );
}

export default App;
