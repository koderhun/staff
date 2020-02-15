import React from "react";
import "./App.css";
import PersonalsContainer from "./components/Personals/PersonalsContainer";
import { initializeIcons } from "@uifabric/icons";
initializeIcons();

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>Personal List</h1>
        </div>
      </header>
      <div className="main">
        <div className="container">
          <PersonalsContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
