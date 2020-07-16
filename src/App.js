import React from "react";
import { Router } from "@reach/router";

import Header from "./components/ui/Header";
import HeroDisplay from "./components/heros/HerosDisplay";
import HeroDetails from "./components/heros/HeroDetails";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <HeroDisplay path="/" />
        <HeroDetails path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
