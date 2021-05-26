import { useState } from "react";
import "./UserInput.css";

const UserInput = ({ userInput, setUserInput, setGridSize, setModalOpen }) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  console.log(player1, player2);

  const handlePlayer1 = (e) => {
    const value = e.target.value;
    setPlayer1(value);
  };
  const handlePlayer2 = (e) => {
    const value = e.target.value;
    setPlayer2(value);
  };

  const handleGridSize = (e) => {
    const value = e.target.value;
    setGridSize(value);
  };
  const submitPlayerNames = (e) => {
    e.preventDefault();
    setUserInput([...userInput, player1, player2]);
    setModalOpen(false);
    setPlayer2("");
    setPlayer1("");
  };

  return (
    <div className="user-inputs">
      <h3>Válassz nevet:</h3>
      <label>
        Játékos 1
        <input
          type="text"
          name="player1"
          value={player1}
          onChange={handlePlayer1}
        />
      </label>

      <label>
        Játékos 2
        <input
          type="text"
          name="player2"
          value={player2}
          onChange={handlePlayer2}
        />
      </label>
      <label>Válassz ki a palya meretet (pl. 10x10-es palya): </label>
      <input
        className="gridsize-input-field"
        type="text"
        name="gridsize"
        onChange={handleGridSize}
      />
      <div className="btn-container">
        <button
          className="submit-btn"
          type="submit"
          onClick={submitPlayerNames}
        >
          küldés
        </button>
      </div>
    </div>
  );
};

export default UserInput;
