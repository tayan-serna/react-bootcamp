import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <li data-testid="card" className="card">
      <img
        data-testid="card-image"
        alt="rick"
        className="card__image"
        src={props.src}
      />
      <div data-testid="card-info" className="card__info">
        {props.name}
      </div>
    </li>
  );
};

Card.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string
};

Card.defaultProps = {
  src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick Sanchez'
};

export default Card;
