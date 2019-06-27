import * as pokeActions from '../actions/pokemon_actions';
import { merge } from 'lodash';


const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {};

  switch (action.type) {
    case pokeActions.RECEIVE_ONE_POKEMON:
      const newItem = { [action.items.id]: action.items };
      return merge({}, state, newItem);
    default:
      return state;

  }


};


export default itemsReducer;