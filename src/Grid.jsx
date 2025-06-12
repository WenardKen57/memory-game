import { Card } from "./Card";
import "./style/grid-style.css";

export default function Grid() {
  const ROW = 3;
  const COLUMN = 3;

  const cards = [
    "Angel",
    "Mark",
    "Frain",
    "Lewis",
    "Frain",
    "Lewis",
    "Lewis",
    "Frain",
    "Lewis",
  ];

  return (
    <div className="grid-container">
      {cards.map((card) => (
        <Card>{card}</Card>
      ))}
    </div>
  );
}
