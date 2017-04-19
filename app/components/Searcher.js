// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Searcher.css';

class Searcher extends Component {

  constructor(props) {
    super(props);
    this.getPokemon = this.getPokemon.bind(this);
    this.handlePokemonName = this.handlePokemonName.bind(this)
    this.state = {pokemonName: ''}
  }

  getPokemon(){
    this.props.setLoading()
    this.props.fetchPokemon(this.state.pokemonName)
  }

  handlePokemonName(event){
    this.setState({pokemonName: event.target.value});
  }

  render() {
    const { fetchPokemon, gotPokemon, setLoading, pokemon, loading } = this.props;
    var loadingGif = loading ? <img className="loading" src="../img/loading.gif" /> : ''
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>

        <div className={styles.pokeInfo}>
          <div><b>Name:</b> {pokemon.name}</div>
          <div><b>Weight:</b> {pokemon.weight}</div>
          <div><b>Height:</b> {pokemon.height}</div>
          <img src={pokemon.image_url} />
        </div>

        <div className={styles.btnGroup}>
          <input className="inputPokemon" type="text" value={this.state.pokemonName} onChange={this.handlePokemonName} />
          <button className={styles.btn} onClick={this.getPokemon}>
            <i className="fa fa-search" />SEARCH
          </button>
        </div>
        <div>{loadingGif}</div>
      </div>
    );
  }
}

export default Searcher;
