import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetail from './pokemon/pokemon_detail';

const Root = ({ store }) => (
  <Provider store={store}>
      <HashRouter>
        <div >
          <h1>REACT SAYS: Pokemansdex</h1>
        </div>

        <Route path = "/" component={PokemonIndexContainer} />
        <Route path = "/pokemon/:pokemonId" component={PokemonDetail} />
      </HashRouter>
  </Provider>
);


export default Root