import React from 'react';
import * as axiosMock from 'axios';
import { render, fireEvent, act } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

import Detail from '../detail';
import FavoriteContext from '../favoriteContext';

test('Should render details view without crashing', async () => {
  const fakeHistory = {
    goBack: jest.fn()
  };
  const fakeMatch = {
    params: {
      id: '1'
    }
  };
  const fakeFavoriteValue = {
    favoriteList: {},
    setFavoriteList: jest.fn()
  };
  let fakeData = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  };
  let containerUtils;
  axiosMock.get.mockResolvedValueOnce({
    data: fakeData
  });

  await act(async () => {
    containerUtils = render(
      <FavoriteContext.Provider value={fakeFavoriteValue}>
        <Detail history={fakeHistory} match={fakeMatch} />
      </FavoriteContext.Provider>
    );
  });

  let imageNode = containerUtils.getByAltText(fakeData.name);
  fireEvent.dblClick(imageNode);

  expect(fakeFavoriteValue.setFavoriteList).toHaveBeenCalledTimes(1);
  expect(fakeFavoriteValue.setFavoriteList).toHaveBeenCalledWith(
    fakeFavoriteValue.favoriteList
  );

  fireEvent.dblClick(imageNode);

  expect(fakeFavoriteValue.setFavoriteList).toHaveBeenCalledTimes(2);
  expect(fakeFavoriteValue.setFavoriteList).toHaveBeenCalledWith(
    fakeFavoriteValue.favoriteList
  );
  expect(imageNode.src).toEqual(fakeData.image);
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(
    'https://rickandmortyapi.com/api/character/1'
  );

  fakeMatch.params.id = '2';
  fakeData = {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  };
  axiosMock.get.mockResolvedValueOnce({
    data: fakeData
  });

  await act(async () => {
    containerUtils.rerender(
      <FavoriteContext.Provider value={fakeFavoriteValue}>
        <Detail history={fakeHistory} match={fakeMatch} />
      </FavoriteContext.Provider>
    );
  });
  imageNode = containerUtils.getByAltText(fakeData.name);
  fireEvent.dblClick(imageNode);
  expect(fakeFavoriteValue.setFavoriteList).toHaveBeenCalledTimes(3);
  expect(fakeFavoriteValue.setFavoriteList).toHaveBeenCalledWith(
    fakeFavoriteValue.favoriteList
  );

  fireEvent.dblClick(imageNode);

  expect(fakeFavoriteValue.setFavoriteList).toHaveBeenCalledTimes(4);
  expect(fakeFavoriteValue.setFavoriteList).toHaveBeenCalledWith(
    fakeFavoriteValue.favoriteList
  );
  expect(imageNode.src).toEqual(fakeData.image);
  expect(axiosMock.get).toHaveBeenCalledTimes(2);
  expect(axiosMock.get).toHaveBeenCalledWith(
    'https://rickandmortyapi.com/api/character/2'
  );

  const backButtonNode = containerUtils.getByLabelText('back');
  fireEvent.click(backButtonNode);

  expect(fakeHistory.goBack).toHaveBeenCalledTimes(1);
});
