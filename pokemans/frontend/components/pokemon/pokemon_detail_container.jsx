import React from 'react';
import { connect } from 'react-redux';

import PokemonDetail from './pokemon_detail';
import { selectOnePokemon } from './../../reducers/selectors';

const mapSTP = (state,ownProps) => ({
  poke: selectOnePokemon(state, ownProps.match.params.pokemonId)
});


export default connect(mapSTP)(PokemonDetail);
