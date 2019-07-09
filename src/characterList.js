import React, { Component } from 'react';
import axios from 'axios';

import Card from './card';

const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';
class CharacterList extends Component {
  state = {
    searchValue: '',
    characters: []
  };

  componentDidMount() {
    axios.get(RickAndMortyAPI).then(({ data: { results } }) => {
      this.setState({
        characters: results || []
      });
    });
  }

  handleChangeInput = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  render() {
    const { searchValue, characters } = this.state;
    return (
      <div className="list-container">
        <div className="search-container">
          <input
            className="search-input"
            value={searchValue}
            onChange={this.handleChangeInput}
          />
          <span role="img" aria-label="search" className="search-button">
            🔍
          </span>
        </div>
        <ul className="card-container">
          {characters.map(character => (
            <Card
              key={character.id}
              name={character.name}
              src={character.image}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default CharacterList;
