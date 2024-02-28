import React from 'react'

const AddEditPokemon = () => {
  return (
    <div className="form-list">
    <label>Pokemon Name</label>
    <br />
    <input
      type="text"
      value={form.pokemon_name}
      onChange={(e) => {update_pokemon("pokemon_name", e)}}
    />
    <br />
    <label>Pokemon Element</label>
    <br />
    <input
      type="text"
      value={form.pokemon_element}
      onChange={(e) => {update_pokemon("pokemon_element", e)}}
    />

    {/* <button onClick={addToList} type="submit">
      Add Pokemon
    </button> */}
  </div>
  )
}

export default AddEditPokemon