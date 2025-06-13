import { Fragment, useEffect, useState, cloneElement } from "react";
import { Card } from "./Card";
import "./style/grid-style.css";

export default function Grid({ setScore }) {
  const [collectionOfCards, setCollectionOfCards] = useState([]);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function createGrid(row, column) {
    const newCollection = [];
    for (let x = 0; x < row; x++) {
      for (let y = 0; y < column; y++) {
        newCollection.push(
          <Card
            key={`${x}-${y}`}
            resetGrid={resetGrid}
            shuffleCards={shuffleCards}
            setScore={setScore}
          />
        );
      }
    }

    return newCollection;
  }

  function resetGrid() {
    setCollectionOfCards((prevCards) => shuffle([...prevCards]));
  }

  useEffect(() => {
    setCollectionOfCards(createGrid(3, 3));
  }, []);

  function shuffleCards() {
    const parent = document.querySelector(".grid-container");
    const divs = Array.from(parent.children);
    shuffle(divs);
    divs.forEach((div) => parent.appendChild(div));
  }

  if (collectionOfCards.length <= 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="grid-container">
        {collectionOfCards.map((card, index) => {
          return <Fragment key={index}>{card}</Fragment>;
        })}
      </div>
    );
  }
}
