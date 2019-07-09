import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            <Link to={`detail/${character.id}`} key={character.id}>
              <Card name={character.name} src={character.image} />
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default CharacterList;
