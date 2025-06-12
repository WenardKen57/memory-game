import { Fragment, useEffect, useState } from "react";
import { Card } from "./Card";
import "./style/grid-style.css";

export default function Grid({ setScore }) {
  const [gridOfCards, setGridOfCards] = useState([]);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function createGrid(row, column) {
    const grid = [];
    for (let x = 0; x < row; x++) {
      for (let y = 0; y < column; y++) {
        grid.push(<Card shuffleCards={shuffleCards} setScore={setScore} />);
      }
    }

    return grid;
  }

  useEffect(() => {
    setGridOfCards(createGrid(3, 3));
  }, []);

  function shuffleCards() {
    const parent = document.querySelector(".grid-container");
    const children = Array.from(parent.children);
    shuffle(children);
    children.forEach((child) => parent.appendChild(child));
  }

  return (
    <div className="grid-container">
      {gridOfCards.map((card, index) => {
        return <Fragment key={index}>{card}</Fragment>;
      })}
    </div>
  );
}
