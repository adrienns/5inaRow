import { useEffect, useState } from "react";

import "./App.css";
import AmobaGrid from "./amoba_grid/AmobaGrid";
import Rules from "./rules/Rules";
import UserNames from "./usernames/UserNames";

function App() {
  const [username, setUsername] = useState([]);

  return (
    <div className="main-container">
      <div className="game-description-container">
        <Rules />
        <UserNames username={username} setUsername={setUsername} />
      </div>
      <div className="grid-container">
        <h1 className="header-text">Amőba játék</h1>

        <AmobaGrid username={username} setUsername={setUsername} />
      </div>
    </div>
  );
}

export default App;
