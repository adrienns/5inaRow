import { useState } from "react";

import "./App.css";
import AmobaGrid from "./amoba_grid/AmobaGrid";
import Rules from "./rules/Rules";
import UserInput from "./userinput/UserInput";

function App() {
  const [userInput, setUserInput] = useState([]);

  return (
    <div className="main-container">
      <div className="game-description-container">
        <Rules />
        <UserInput userInput={userInput} setUserInput={setUserInput} />
      </div>
      <div className="grid-container">
        <h1 className="header-text">Amőba játék</h1>

        <AmobaGrid userInput={userInput} setUserInput={setUserInput} />
      </div>
      <div className="userInputs">
        <div> Játékos 1 : {userInput[0]}</div>
        <div> Játékos 2 : {userInput[1]}</div>
      </div>
    </div>
  );
}

export default App;
