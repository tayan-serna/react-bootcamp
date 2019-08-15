import React from 'react';
import * as axiosMock from 'axios';
import { render, fireEvent, act, waitForElement } from '@testing-library/react';

import CharacterList from '../characterList';
import FilterContext from '../filterContext';

const RickAndMortyAPI = 'https://rickandmortyapi.com/api/character/';

test('should not render any result', async () => {
  const fakeFilterContext = {
    characters: [],
    filteredCharacters: [],
    filterValue: '',
    setFilterObject: jest.fn()
  };
  let fakeData = {
    results: []
  };
  axiosMock.get.mockResolvedValueOnce({
    data: fakeData
  });
  let containerUtils;
  await act(async () => {
    containerUtils = render(
      <FilterContext.Provider value={fakeFilterContext}>
        <CharacterList />
      </FilterContext.Provider>
    );
  });

  const blankNode = containerUtils.getByText('There is not results');

  expect(blankNode).toBeTruthy();
  expect(fakeFilterContext.setFilterObject).toHaveBeenCalledTimes(1);
  expect(fakeFilterContext.setFilterObject).toHaveBeenCalledWith({
    characters: fakeData.results,
    filteredCharacters: fakeData.results
  });
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(RickAndMortyAPI);
});

test('should render the card list', async () => {
  const fakeFilterContext = {
    characters: [],
    filteredCharacters: [],
    filterValue: '',
    setFilterObject: jest.fn()
  };
  const fakeData = {
    results: [
      {
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
      },
      {
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
      }
    ]
  };
  axiosMock.get.mockResolvedValueOnce({
    data: fakeData
  });
  let containerUtils;
  await act(async () => {
    containerUtils = render(
      <FilterContext.Provider value={fakeFilterContext}>
        <CharacterList />
      </FilterContext.Provider>
    );
  });

  let blankNode = containerUtils.getByText('There is not results');
  console.log(containerUtils.container.innerHTML);
  expect(blankNode).toBeTruthy();
  expect(fakeFilterContext.setFilterObject).toHaveBeenCalledTimes(1);
});
