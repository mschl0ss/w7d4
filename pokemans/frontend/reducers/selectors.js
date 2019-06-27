

export const selectAllPokemon = state => {
  // debugger;
  return ( 
    Object.values(state.entities.pokemon)
  )
};

export const selectOnePokemon = (state,id) => {
  let p = selectAllPokemon(state);
  // debugger
  p.forEach( poke => {
    if ( poke[id] === id ) return poke;
  });
};



// export default selectAllPokemon;