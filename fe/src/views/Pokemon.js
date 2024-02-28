import React, { useEffect, useState } from "react";

// Styles
import "../styles/pokemon.css";

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [tab, setTabs] = useState(0)
  const [form, setForm] = useState({
    pokemon_name: "",
    pokemon_element: "",
  });

  useEffect(() => {
    console.log(form);
  });

  function update_pokemon(key, e) {
    const value = e.target.value;
    setForm({
      ...form,
      [key]: value,
    });
  }

  return (
    <div className="container">
      <h1>Pokemon</h1>

      <div className="form-list">
        <label>Pokemon Name</label>
        <br />
        <input
          type="text"
          value={form.pokemon_name}
          onChange={(e) => {
            update_pokemon("pokemon_name", e);
          }}
        />
        <br />
        <label>Pokemon Element</label>
        <br />
        <input
          type="text"
          value={form.pokemon_element}
          onChange={(e) => {
            update_pokemon("pokemon_element", e);
          }}
        />

        {/* <button onClick={addToList} type="submit">
          Add Pokemon
        </button> */}
      </div>
    </div>
  );
};

export default Pokemon;
