// @flow
export const FETCH_POKEMON = 'FETCH_POKEMON';
export const FETCH_POKEMON_FAILED = 'FETCH_POKEMON_FAILED';
export const GOT_POKEMON = 'GOT_POKEMON';
export const SET_LOADING = 'SET_LOADING';
import Api from '../api/pokemon'

export function fetchPokemon(pokemon) {
  return (dispatch, getState) => {
    Api.getPokemon(pokemon).then((pokemon) => {
      try{
        console.log("POKEMON", pokemon)
        dispatch(gotPokemon(pokemon))
      }catch(error){
        console.error(error);
        dispatch(fetchPokemonFailed())
      }
    })
  }
}

export function gotPokemon(pokemon) {
  return {
    type: GOT_POKEMON,
    pokemon,
  }
}

export function setLoading() {
  return {
    type: SET_LOADING
  }
}

export function fetchPokemonFailed() {
  return {
    type: FETCH_POKEMON_FAILED
  }
}
