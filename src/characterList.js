import React, { Component } from 'react';

import Card from './card';

class CharacterList extends Component {
  render() {
    return (
      <div className="list-container">
        <div className="search-container">
          <input className="search-input" />
          <span role="img" aria-label="search" className="search-button">
            🔍
          </span>
        </div>
        <ul className="card-container">
          <Card />
          <Card
            name="Morty Smith"
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          />
          <Card
            name="Summer Smith"
            src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
          />
          <Card
            name="Beth Smith"
            src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    );
  }
}

export default CharacterList;
