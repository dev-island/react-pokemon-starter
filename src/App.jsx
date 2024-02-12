import { useState } from "react";
import PokemonCard from "./PokemonCard";
import pokidexEntries from "./pokemon";

import "./App.css";

function App() {
  const [pokidex, setPokidex] = useState(pokidexEntries);

  return (
    <main className="main-container">
      <h1 className="page-header">React Pokidex</h1>

      <div className="pokemon-cards-container">
        {pokidex &&
          pokidex.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                icon={pokemon.icon}
                typeIcon={pokemon.typeIcon}
              />
            );
          })}
      </div>
    </main>
  );
}

export default App;
