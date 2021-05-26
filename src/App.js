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
        <div class="modal">
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
