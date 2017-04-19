// @flow
import { GOT_POKEMON, SET_LOADING, FETCH_POKEMON_FAILED }  from '../actions/searcher';
import Immutable from 'immutable'
import Pokemon from '../models/Pokemon'

export default function reducer(state, action) {
  if (state === undefined) {
    state = Immutable.fromJS({ pokemon: new Pokemon(), loading: false, error: '' })
  }

  switch(action.type) {
    case GOT_POKEMON:
      return state.set('pokemon', action.pokemon).set('loading', false)
    case SET_LOADING:
      return state.set('loading', true)
    case FETCH_POKEMON_FAILED:
      return state.set('error', action.error).set('loading', false)
    default:
      return state
  }
}
