import { useEffect, useState } from "react";

function Card({ setScore, shuffleCards }) {
  const [pokemon, setPokemon] = useState(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 1025) + 1;

    const fetchRandomPokemon = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch pokemon");
          }
          return response.json();
        })
        .then((data) => {
          setPokemon(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    };

    fetchRandomPokemon();
  }, []);

  function handleOnClick() {
    if (isActive) {
      shuffleCards();
      setScore((prevScore) => prevScore + 1)
      setIsActive(false);
    } else {
      setScore(0);
      setIsActive(true);
    }
  }

  return (
    <div onClick={handleOnClick}>
      {pokemon ? (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      ) : (
        <h1>Loading</h1>
      )}
      <p>{pokemon?.name || "Unknown pokemon"}</p>
    </div>
  );
}

export { Card };
