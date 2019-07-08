import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';

import './index.scss';

const App = () => {
  return (
    <div>
      <Header />
      <section className="container">
        <div className="detail">
          <div className="image-container">
            <span role="img" aria-label="back" className="detail__back">
              🔙
            </span>
            <img
              alt="rick sanchez"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              className="detail__image"
            />
            <span role="img" aria-label="star" className="detail__favorite">
              ⭐
            </span>
          </div>
          <div className="detail__details">
            <div className="detail__item">
              <strong className="detail__label">NAME: </strong>{' '}
              <span className="datail_info">
                Rick Sanchez <span>(Alive)</span>
              </span>
            </div>
            <div className="detail__item">
              <strong className="detail__label">SPECIE: </strong>{' '}
              <span className="datail_info">Human</span>
            </div>
            <div className="detail__item">
              <strong className="detail__label">TYPE: </strong>{' '}
              <span className="datail_info">N/A</span>
            </div>
            <div className="detail__item">
              <strong className="detail__label">GENDER: </strong>{' '}
              <span className="datail_info">Male</span>
            </div>
            <div className="detail__item">
              <strong className="detail__label">LOCATION: </strong>{' '}
              <span className="datail_info">Earth (C-137)</span>
            </div>
          </div>
        </div>
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
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
