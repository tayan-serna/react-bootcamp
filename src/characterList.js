import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import FilterContext from './filterContext';
import Card from './card';

const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';
class CharacterList extends Component {
  state = {
    searchValue: this.props.filterValue
  };

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
      character.name.toLowerCase().includes(e.target.value)
    );
    this.setState(
      {
        searchValue: e.target.value
      },
      () => {
        this.props.setFilterObject({
          filteredCharacters: newFilteredCharacters,
          filterValue: e.target.value
        });
      }
    );
  };

  render() {
    const { filteredCharacters } = this.props;
    const { searchValue } = this.state;
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
          {filteredCharacters.map(character => (
            <Link to={`detail/${character.id}`} key={character.id}>
              <Card name={character.name} src={character.image} />
            </Link>
          ))}
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
