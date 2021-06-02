import React, { useEffect, useState } from "react";
import "./UserInput.css";
import GridLimitModalText from "../GridLimitModalText";

const UserInput = ({
  userInput,
  setUserInput,
  setGridSize,
  setModalOpen,
  gridSize,
}) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [isGridLimitedExceeded, setIsGridLimitedExceeded] = useState(false);

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
    if (isGridLimitedExceeded == false) {
      setUserInput([...userInput, player1, player2]);
      setModalOpen(false);
      setPlayer2("");
      setPlayer1("");
    }
  };

  const checkGridLimit = () => {
    if (gridSize <= 30) {
      setIsGridLimitedExceeded(false);
    } else {
      setIsGridLimitedExceeded(true);
    }
  };

  useEffect(() => {
    checkGridLimit();
  }, [gridSize]);

  return (
    <React.Fragment>
      <h4>Choose a name:</h4>
      <div className="user-input-list">
        <div className="form-row">
          <label className="name-label"> Player 1</label>

          <input
            className="name-input-field"
            type="text"
            name="player1"
            value={player1}
            onChange={handlePlayer1}
          />
        </div>
        <div className="form-row">
          <label className="name-label"> Player 2 </label>

          <input
            className="name-input-field"
            type="text"
            name="player2"
            value={player2}
            onChange={handlePlayer2}
          />
        </div>
        <div className="form-row">
          <label className="name-label">
            Type the size of the grid(f.e. 10 = 10x10):{" "}
          </label>
          <input
            className="gridsize-input-field"
            type="text"
            name="gridsize"
            onChange={handleGridSize}
          />
        </div>
      </div>
      <div>{isGridLimitedExceeded ? <GridLimitModalText /> : null}</div>

      <li className="btn-container">
        <button
          className="submit-btn"
          type="submit"
          onClick={submitPlayerNames}
        >
          küldés
        </button>
      </li>
    </React.Fragment>
  );
};

export default UserInput;
