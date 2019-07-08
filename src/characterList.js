import React, { Component } from 'react';

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
          <li className="card">
            <img
              alt="rick"
              className="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
            <div className="card__info">Rick Sanchez</div>
          </li>
          <li className="card">
            <img
              alt="rick"
              className="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
            <div className="card__info">Rick Sanchez</div>
          </li>
          <li className="card">
            <img
              alt="rick"
              className="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
            <div className="card__info">Rick Sanchez</div>
          </li>
          <li className="card">
            <img
              alt="rick"
              className="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
            <div className="card__info">Rick Sanchez</div>
          </li>
          <li className="card">
            <img
              alt="rick"
              className="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
            <div className="card__info">Rick Sanchez</div>
          </li>
          <li className="card">
            <img
              alt="rick"
              className="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
            <div className="card__info">Rick Sanchez</div>
          </li>
          <li className="card">
            <img
              alt="rick"
              className="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
            <div className="card__info">Rick Sanchez</div>
          </li>
          <li className="card">
            <img
              alt="rick"
              className="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
            <div className="card__info">Rick Sanchez</div>
          </li>
          <li className="card">
            <img
              alt="rick"
              className="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
            <div className="card__info">Rick Sanchez</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CharacterList;
