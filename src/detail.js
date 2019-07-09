import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ history }) => {
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
