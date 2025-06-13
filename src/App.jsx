import { useEffect, useState } from "react";
import Grid from "./Grid";
import NavigationBar from "./NavigationBar";
import "./style/style.css";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setHighScore((prevHighScore) => {
      if (prevHighScore < score) {
        return score;
      }
      return prevHighScore;
    });
  }, [score]);

  return (
    <div className="container">
      <NavigationBar currentScore={score} highScore={highScore} />
      <Grid setScore={setScore} />
    </div>
  );
}

export default App;
