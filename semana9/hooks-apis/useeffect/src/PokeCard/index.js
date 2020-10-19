
import React, { useState, useEffect } from "react";
import axios from "axios";
function Index (props) {
    const [pokemonOne, setPokemonOne] = useState({});
    const pegaPokemon = (pokeName) => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
          .then((response) => {
            // guarda as infos do pokemon no estado
            setPokemonOne(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      useEffect(() => {
        pegaPokemon(props.pokemon);
      }, [props.pokemon]);
    //   const pokemon = pokemon;
    return (
        <div>
        <p>{pokemonOne.name}</p>
        <p>{pokemonOne.weight} Kg</p>
        {pokemonOne.types && <p>{pokemonOne.types[0].type.name}</p>}
        {pokemonOne.sprites && (
          <img src={pokemonOne.sprites.front_default} alt={pokemonOne.name} />
        )}
      </div>
    )
}
export default Index