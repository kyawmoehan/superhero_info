import React from "react";
import Header from "./components/ui/Header";

import HeroDisplay from "./components/heros/HerosDisplay";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <HeroDisplay />
    </div>
  );
}

export default App;
