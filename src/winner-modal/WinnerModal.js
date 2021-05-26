import React from "react";
import "./WinnerModal.css";

const WinnerModal = ({ winnerModalIsOpen, winnerId, userInput }) => {
  console.log(winnerId);

  return (
    <React.Fragment>
      {winnerModalIsOpen ? (
        <div className="winner-modal-container">
          {" "}
          <span> {userInput[winnerId]} </span> te nyertel!
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default WinnerModal;
