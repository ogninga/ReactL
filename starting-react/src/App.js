import "./App.css";
import propTypes from "prop-types";
import pokemon from "./pokemon.json";
import { useState } from "react";
import React from "react";

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <button onClick={() => onSelect(pokemon)}>Select</button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.shape({
      english: propTypes.string.isRequired,
    }),
    type: propTypes.arrayOf(propTypes.string.isRequired),
  }),
  onSelect: propTypes.func.isRequired,
};

const PokemonInfo = ({ name, base }) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      {Object.keys(base).map((key) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{base[key]}</td>
        </tr>
      ))}
    </table>
  </div>
);

PokemonInfo.propTypes = {
  name: propTypes.shape({
    english: propTypes.string.isRequired,
  }),
  base: propTypes.shape({
    HP: propTypes.number.isRequired,
    Attack: propTypes.number.isRequired,
    Defense: propTypes.number.isRequired,
    "Sp. Attack": propTypes.number.isRequired,
    "SP. Defense": propTypes.number.isRequired,
    Speed: propTypes.number.isRequired,
  }),
};

function App() {
  const [filter, filterSet] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState(null);
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 30%",
          gridColumnGap: "1rem",
        }}
      >
        <div>
          <input
            value={filter}
            onChange={(event) => filterSet(event.target.value)}
          />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                .filter((pokemon) =>
                  pokemon.name.english
                    .toLocaleLowerCase()
                    .includes(filter.toLocaleLowerCase())
                )
                .slice(0, 20)
                .map((pokemon) => (
                  // <tr key={[pokemon.id, pokemon.name.english].join(":")}> can make up a key this way
                  <PokemonRow
                    pokemon={pokemon}
                    key={pokemon.id}
                    onSelect={(pokemon) => setSelectedItem(pokemon)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
    </div>
  );
}

export default App;
