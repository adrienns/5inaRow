import { useState } from "react";
import "./App.css";
import AmobaGrid from "./amoba_grid/AmobaGrid";
import Rules from "./rules/Rules";
import UserInput from "./userinput/UserInput";

function App() {
  const [userInput, setUserInput] = useState([]);
  const [gridSize, setGridSize] = useState(10);
  const [modalIsOpen, setModalOpen] = useState(true);
  const [winnerModalIsOpen, setWinnerModalOpen] = useState(false);

  return (
    <div className="main-container">
      {modalIsOpen ? (
        <div className="modal">
          <div className="game-description-modal-content">
            <Rules />
            <UserInput
              setModalOpen={setModalOpen}
              userInput={userInput}
              setUserInput={setUserInput}
              gridSize={gridSize}
              setGridSize={setGridSize}
            />
          </div>
        </div>
      ) : null}
      <div>
        <h2 className="header-text">5 in a Row</h2>
        <div className="players-button-container">
          <div className="users">
            <div className="player1-text"> Player 1 : {userInput[0]}</div>
            <div> Player 2 : {userInput[1]}</div>
          </div>
          <div className="reset-btn-container">
            <button className="reset-btn">reset</button>
          </div>
        </div>
      </div>
      <AmobaGrid
        userInput={userInput}
        setUserInput={setUserInput}
        gridSize={gridSize}
        setGridSize={setGridSize}
        setWinnerModalOpen={setWinnerModalOpen}
        winnerModalIsOpen={winnerModalIsOpen}
      />
    </div>
  );
}

export default App;
