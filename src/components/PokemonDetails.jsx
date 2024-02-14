import React from "react";

export default function PokemonDetails({ name, icon, type, description }) {
  return (
    <div>
      <div className="pokedex-container">
        <div className="pokedex-left">
          <div className="pokedex-screen-container">
            <div className="pokedex-screen">
              <img src={icon} alt={name} className="pokemon-image" />
            </div>
          </div>
          <div className="pokedex-buttons">
            <div className="button red-button"></div>
            <div className="button small-button yellow-button"></div>
            <div className="button small-button green-button"></div>
          </div>
        </div>
        <div className="pokedex-hinge"></div>
        <div className="pokedex-right">
          <div className="pokedex-screen-container">
            <div className="pokedex-screen screen-large">
              <p>{name}</p>
              <p className="type-text">Type: {type}</p>

              <p className="info-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
