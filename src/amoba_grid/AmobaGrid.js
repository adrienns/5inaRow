import { useEffect, useState } from "react";
import Cell from "../cell/Cell";
import "./AmobaGrid.css";

const GRID_NUM = 10;
const AmobaGrid = ({ username }) => {
  const [cells, setCells] = useState([]);
  const [switchPlayer, setSwitchPlayer] = useState(1);

  const checkWinnerInRows = (playerId) => {
    let score = 0;
    for (let i = 0; i < cells.length; i++) {
      let subarray = cells[i];
      for (let j = 0; j < subarray.length; j++) {
        let currObj = subarray[j];
        // if (currObj == undefined) {
        //   debugger;
        // }
        if (currObj.value === playerId) {
          score += 1;
        } else {
          score = 0;
        }

        if (score === 5) {
          alert(`player ${playerId} won`);
        }
      }
    }
  };

  const checkWinnerInColoumns = (playerId) => {
    let score = 0;
    let i = 0;
    for (i; i < cells.length; i++) {
      for (let j = 0; j < cells.length; j++) {
        let currentObj = cells[j][i];
        if (currentObj.value === playerId) {
          score += 1;
        } else {
          score = 0;
        }
        if (score === 5) {
          if (score === 5) {
            alert(`player ${playerId} won`);
          }
        }
      }
    }
  };

  const checkWinnerInDiagonals = (playerId) => {
    // moving the diagonal
    for (let i = 0; i < cells.length; i++) {
      let scoreLeft = 0;
      let scoreRight = 0;
      let scoreOppositeLeft = 0;
      let scoreOppositeRight = 0;
      // looping through one diagonal
      for (let j = 0; j < cells.length - i; j++) {
        let leftCurrentObj = cells[j][j + i];
        let rightCurrentObj = cells[j + i][j];
        let oppositeLeftCurrentObj = cells[j + i][cells.length - 1 - j];
        let oppositeRightCurrentObj = cells[cells.length - 1 - j - i][j];
        if (leftCurrentObj.value === playerId) {
          scoreLeft += 1;
        } else {
          scoreLeft = 0;
        }
        if (rightCurrentObj.value === playerId) {
          scoreRight += 1;
        } else {
          scoreRight = 0;
        }
        if (oppositeLeftCurrentObj.value === playerId) {
          scoreOppositeLeft += 1;
        } else {
          scoreOppositeLeft = 0;
        }
        if (oppositeRightCurrentObj.value === playerId) {
          scoreOppositeRight += 1;
        } else {
          scoreOppositeRight = 0;
        }

        if (
          scoreLeft === 5 ||
          scoreRight === 5 ||
          scoreOppositeLeft === 5 ||
          scoreOppositeRight === 5
        ) {
          alert(`player ${playerId} won`);
        }
      }
    }
  };

  const createCells = () => {
    let count = 0;
    let outer_arr = [];
    let inner_arr = [];
    for (let x = 0; x < GRID_NUM; x++) {
      for (let y = 0; y < GRID_NUM; y++) {
        count = count + 1;
        inner_arr = [
          ...inner_arr,
          { coordinates: [x, y], isChecked: false, value: "", id: count },
        ];

        if (y % GRID_NUM === 9) {
          outer_arr = [...outer_arr, inner_arr];
          inner_arr = [];
        }
      }
    }

    setCells(outer_arr);
  };

  const handleReset = () => {
    setCells("");
    createCells();
  };

  const getIndex = (copiedCells, id) => {
    let selectedElem;
    for (let i = 0; i < copiedCells.length; i++) {
      let currentArr = copiedCells[i];
      for (let j = 0; j < currentArr.length; j++) {
        if (currentArr[j].id === id) {
          selectedElem = currentArr[j];
          break;
        }
      }
    }
    return selectedElem;
  };

  // need to copy a specific element inside that i want to change
  //need to do deep copy
  const changeColor = (id) => {
    // copy the original array to be able to modify it
    let copiedCells = [...cells];

    // find the index of the element
    let selectedItem = getIndex(copiedCells, id);

    if (!selectedItem.isChecked) {
      if (switchPlayer === 1) {
        selectedItem.value = 1;
        selectedItem.isChecked = true;
        checkWinnerInRows(1);
        checkWinnerInColoumns(1);
        checkWinnerInDiagonals(1);
        setSwitchPlayer(0);
      } else {
        selectedItem.value = 0;
        checkWinnerInRows(0);
        checkWinnerInColoumns(0);
        checkWinnerInDiagonals(0);
        setSwitchPlayer(1);

        selectedItem.isChecked = true;
      }
    }
    // deep copy of the object element that i want to change-
    // const selectedItem = { ...copiedCells[index] };

    //change the element
    // selectedItem.isChecked = true;

    //assignthe changed element to the copied array
    // copiedCells[index] = selectedItem;

    // change state and rerender
    setCells(copiedCells);

    //switch players
  };

  useEffect(() => {
    createCells();
  }, []);

  return (
    <div className="grid-cells">
      {cells.map((subarray, i) =>
        subarray.map((el, i) => {
          return (
            <Cell
              changeColor={changeColor}
              key={i}
              id={el.id}
              cell={el}
              value={el.value}
            />
          );
        })
      )}
      <div>
        <div>
          {username.map((el) => (
            <div>{el}</div>
          ))}
          {/* {switchPlayer === 1 ? <div> {}</div> : <div>{}</div>} */}
        </div>
        <button className="reset-btn" onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
};

export default AmobaGrid;