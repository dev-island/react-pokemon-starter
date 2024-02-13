import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import pokidexEntries from "./pokemon";

import "./App.css";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  const [pokidex, setPokidex] = useState(pokidexEntries);
  const [selectedPokemon, setSelectedPokemon] = useState(pokidex[0]);

  return (
    <main className="main-container">
      <h1 className="page-header">React Pokidex</h1>

      <PokemonDetails {...selectedPokemon} />

      <div className="pokemon-cards-container">
        {pokidex &&
          pokidex.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                icon={pokemon.icon}
                typeIcon={pokemon.typeIcon}
                onClickHandler={() => {
                  setSelectedPokemon(pokemon);
                }}
              />
            );
          })}
      </div>
    </main>
  );
}

export default App;
