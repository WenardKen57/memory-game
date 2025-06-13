export default function NavigationBar({currentScore, highScore}) {

  return <div className="navigationBar">
    <h1>Memory game</h1>
    <div>
      <p>High score: {highScore}</p>
      <p>Current score: {currentScore}</p>
    </div>
  </div>;
}
