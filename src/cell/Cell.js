import "./Cell.css";

const Cell = ({ id, value, changeColor }) => {
  return (
    <div
      key={id}
      className={
        value === 2 ? "player1_cell" : value === 1 ? "x player2_cell" : "cell"
      }
      onClick={() => changeColor(id)}
    ></div>
  );
};

export default Cell;
