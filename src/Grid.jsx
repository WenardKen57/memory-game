import { Fragment } from "react";
import { Card } from "./Card";
import "./style/grid-style.css";

export default function Grid() {
  function createGrid(row, column) {
    const grid = [];
    for (let x = 0; x < row; x++) {
      for (let y = 0; y < column; y++) {
        grid.push(<Card></Card>);
      }
    }

    return grid;
  }

  return (
    <div className="grid-container">{createGrid(3, 3).map((card) => card)}</div>
  );
}
