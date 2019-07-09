import { createContext } from 'react';

const FilterContext = createContext([
  {
    filteredObject: {
      characters: [],
      filteredCharacters: [],
      filterValue: ''
    },
    setFilterObject: () => {}
  }
]);

export default FilterContext;
