import React from "react";
import "./WinnerModal.css";

const WinnerModal = ({ winnerModalIsOpen, winnerId, userInput }) => {
  return (
    <React.Fragment>
      {winnerModalIsOpen ? (
        <div className="winner-modal-container">
          <div className="winner-text">
            <span> {userInput[winnerId - 1]} </span>, you won! :)
          </div>
          <div className="new-game-btn-wrapper">
            <button>New Game</button>
            <button>Reset With New Players</button>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default WinnerModal;
