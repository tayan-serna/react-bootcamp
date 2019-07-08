import React from 'react';

const Header = () => {
  return React.createElement(
    'header',
    { className: 'title' },
    React.createElement('h1', {}, 'RICK AND MORTY')
  );
};

export default Header;
