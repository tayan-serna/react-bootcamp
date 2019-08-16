import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import FilterContext from './filterContext';
import Card from './card';

const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';
class CharacterList extends Component {
  componentDidMount() {
    if (!this.props.characters.length) {
      axios.get(RickAndMortyAPI).then(({ data: { results } }) => {
        this.props.setFilterObject({
          characters: results || [],
          filteredCharacters: results || []
        });
      });
    }
  }

  handleChangeInput = e => {
    e.persist();
    const newFilteredCharacters = this.props.characters.filter(character =>
      character.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.props.setFilterObject({
      filteredCharacters: newFilteredCharacters,
      filterValue: e.target.value
    });
  };

  render() {
    const { filteredCharacters } = this.props;
    return (
      <div className="list-container">
        <div className="search-container">
          <input
            className="search-input"
            value={this.props.filterValue}
            onChange={this.handleChangeInput}
            data-testid="search-input"
          />
          <span role="img" aria-label="search" className="search-button">
            🔍
          </span>
        </div>
        <ul className="card-container">
          {filteredCharacters.length ? (
            filteredCharacters.map(character => (
              <Link to={`detail/${character.id}`} key={character.id}>
                <Card name={character.name} src={character.image} />
              </Link>
            ))
          ) : (
            <span>There is not results</span>
          )}
        </ul>
      </div>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredCharacters: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterValue: PropTypes.string.isRequired,
  setFilterObject: PropTypes.func.isRequired
};

export default function CharacterListWithContext() {
  return (
    <FilterContext.Consumer>
      {context => <CharacterList {...context} />}
    </FilterContext.Consumer>
  );
}
