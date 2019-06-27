//global imports
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

//local imports
import configureStore from './store/store';
import Root from './components/root';


//thrown onto window imports
// import * as apiUtils from './util/api_utils';
import * as pokeActions from './actions/pokemon_actions';
// import {selectAllPokemon} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root');
  
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root)

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.pokeActions = pokeActions;
  // window.selectAllPokemon = selectAllPokemon;
  // window.apiUtils = apiUtils;
  // window.hi = ()=>console.log('hi');
}); 