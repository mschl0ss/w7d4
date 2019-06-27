// import React from 'react';
import { connect } from 'react-redux';
import selectAllPokemon from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
import * as pokeActions from './../../actions/pokemon_actions';

const mapSTP = state => {
  
  return ({
  pokemon: selectAllPokemon(state)});
};

const mapDTP = dispatch => ({
  requestAllPokemon: dispatch(pokeActions.requestAllPokemon())
});

export default connect(
  mapSTP,
  mapDTP
)(PokemonIndex);

