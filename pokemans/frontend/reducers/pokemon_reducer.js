import * as pokeActions from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {};
  // debugger;
  switch(action.type) {
    case pokeActions.RECEIVE_ALL_POKEMON: 
      Object.values(action.pokemon).forEach(pokemon => {
        nextState[pokemon.id] = pokemon;
      });
      return nextState;
    case pokeActions.RECEIVE_ONE_POKEMON:
      const newPoke = { [action.pokemon.id]: action.pokemon};
      return merge({}, state, newPoke)
      // return action.pokemon;
    default: 
      return state; 
  }
};

export default pokemonReducer;