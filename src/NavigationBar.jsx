export default function NavigationBar({currentScore}) {
  const highScore = 100;

  return <div className="navigationBar">
    <h1>Memory game</h1>
    <div>
      <p>High score: {highScore}</p>
      <p>Current score: {currentScore}</p>
    </div>
  </div>;
}
