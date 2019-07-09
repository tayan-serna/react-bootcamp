import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import FavoriteContext from './favoriteContext';

const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';

const Detail = ({ history, match }) => {
  const [character, setCharacter] = useState({
    loading: true
  });
  const { favoriteList, setFavoriteList } = useContext(FavoriteContext);
  const [isFavorite, setIsFavorite] = useState(favoriteList[match.params.id]);

  useEffect(() => {
    axios.get(`${RickAndMortyAPI}${match.params.id}`).then(({ data }) => {
      setCharacter({
        ...data,
        loading: false
      });
    }, console.error);
  }, [match.params.id]);

  if (character.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="detail">
      <div className="image-container">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events*/}
        <span
          role="img"
          aria-label="back"
          className="detail__back"
          onClick={history.goBack}
        >
          🔙
        </span>
        <img
          alt={character.name}
          onDoubleClick={() => {
            const isFavoriteCharacter = favoriteList[character.id]
              ? !favoriteList[character.id]
              : true;
            favoriteList[character.id] = isFavoriteCharacter;
            setIsFavorite(isFavoriteCharacter);
            setFavoriteList(favoriteList);
          }}
          src={character.image}
          className="detail__image"
        />
        {isFavorite && (
          <span role="img" aria-label="star" className="detail__favorite">
            ⭐
          </span>
        )}
      </div>
      <div className="detail__details">
        <div className="detail__item">
          <strong className="detail__label">NAME: </strong>{' '}
          <span className="datail_info">
            {character.name} <span>({character.status})</span>
          </span>
        </div>
        <div className="detail__item">
          <strong className="detail__label">SPECIE: </strong>{' '}
          <span className="datail_info">{character.species}</span>
        </div>
        <div className="detail__item">
          <strong className="detail__label">TYPE: </strong>{' '}
          <span className="datail_info">{character.type || 'N/A'}</span>
        </div>
        <div className="detail__item">
          <strong className="detail__label">GENDER: </strong>{' '}
          <span className="datail_info">{character.gender}</span>
        </div>
        <div className="detail__item">
          <strong className="detail__label">LOCATION: </strong>{' '}
          <span className="datail_info">{character.origin.name}</span>
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func
  }).isRequired
};

export default Detail;
