import React from 'react';
import { Link } from 'react-router-dom';



const PokemonIndexItem = ({poke}) => (
  <li>
    <Link to="/pokemon/:pokemonId">
      <p>{poke.name}</p>
      <p><img src={poke.image_url} /></p>
    </Link>
  </li>
);

export default PokemonIndexItem;