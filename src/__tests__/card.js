import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../card';

test('Card component should render with the correct props', () => {
  const container = document.createElement('div');
  ReactDOM.render(
    <Card
      src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      name="morty"
    />,
    container
  );

  const imageNode = container.querySelectorAll('[data-testid="card-image"]')[0];
  const infoNode = container.querySelectorAll('[data-testid="card-info"]')[0];

  expect(imageNode.src).toEqual(
    'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  );
  expect(infoNode.textContent).toEqual('morty');
});
