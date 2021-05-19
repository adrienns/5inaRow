import { useEffect, useState } from "react";
import "./UserNames.css";

const UserNames = ({ username, setUsername }) => {
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

  const submitPlayerNames = (e) => {
    e.preventDefault();
    setUsername([...username, player1, player2]);
  };

  return (
    <div className="user-inputs">
      <h3>Válassz nevet:</h3>
      <label>
        Játékos 1
        <input type="text" name="player1" onChange={handlePlayer1} />
      </label>

      <label>
        Játékos 2
        <input type="text" name="player2" onChange={handlePlayer2} />
      </label>
      <button className="submit-btn" type="submit" onClick={submitPlayerNames}>
        kuldes
      </button>
    </div>
  );
};

export default UserNames;
