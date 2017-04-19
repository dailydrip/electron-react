// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <img src="../img/pokemon_logo.png" />
          <h2>Pokemon Searcher</h2>
          <Link to="/searcher">ENTER</Link>
        </div>
      </div>
    );
  }
}
