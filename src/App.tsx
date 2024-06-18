import { useState } from "react";
import "./App.css";
import {
  canMoveItem,
  correctArr,
  getEmptyXY,
  getRandomArr,
} from "./utils/common";

function App() {
  const [state, setState] = useState(getRandomArr());
  const [moveCount, setMoveCount] = useState(0);
  const moveItem = (x: number, y: number, item: number) => {
    const [emptyX, emptyY] = getEmptyXY(state, 16);
    if (canMoveItem(emptyX, emptyY, x, y)) {
      setMoveCount((c) => c + 1);
      setState(() => {
        const newState = structuredClone(state);
        newState[y][x] = 16;
        newState[emptyY][emptyX] = item;
        return newState;
      });
    }
  };
  return (
    <>
      <div className="moves">{moveCount}</div>
      <div className="game">
        {state.map((line, y) =>
          line.map((item, x) => (
            <div
              style={{ top: y * 25 + "%", left: x * 25 + "%" }}
              className={`game__item ${item === 16 && "game__item--empty"} ${
                correctArr[y][x] === item && "game__item--success"
              }`}
              onClick={() => moveItem(x, y, item)}
            >
              {item}
            </div>
          ))
        )}
      </div>
      <button
        className="reset-btn"
        type="button"
        onClick={() => {
          setMoveCount(0);
          setState(getRandomArr());
        }}
      >
        reset
      </button>
    </>
  );
}

export default App;
