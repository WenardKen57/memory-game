import { useState } from "react";
import Grid from "./Grid";
import NavigationBar from "./NavigationBar";
import './style/style.css'

function App() {
  const [score, setScore] = useState(0);

  return <div className="container">
    <NavigationBar currentScore={score}/> 
    <Grid setScore={setScore}/>
  </div>;
}

export default App;
