export default function NavigationBar() {
  const highScore = 100;
  const currentScore = 0;

  return <div className="navigationBar">
    <h1>Memory game</h1>
    <div>
      <p>High score: {highScore}</p>
      <p>Current score: {currentScore}</p>
    </div>
  </div>;
}
