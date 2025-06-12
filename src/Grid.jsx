import { Fragment, useEffect, useState } from "react";
import { Card } from "./Card";
import "./style/grid-style.css";

export default function Grid({setScore}) {
  const [gridOfCards, setGridOfCards] = useState([]);

  function createGrid(row, column) {
    const grid = [];
    for (let x = 0; x < row; x++) {
      for (let y = 0; y < column; y++) {
        grid.push(<Card setScore={setScore} />);
      }
    }

    return grid;
  }

  useEffect(() => {
    setGridOfCards(createGrid(3, 3));
  }, [])

  return (
    <div className="grid-container">
      {gridOfCards.map((card, index) => {
        return <Fragment key={index}>{card}</Fragment>
      })}
    </div>
  );
}
