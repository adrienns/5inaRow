import "./Cell.css";

const Cell = ({ id, value, changeColor }) => {
  return (
    <td
      key={id}
      className={
        value === 2 ? "player1_cell" : value === 1 ? "x player2_cell" : "cell"
      }
      onClick={() => changeColor(id)}
    ></td>
  );
};

export default Cell;
