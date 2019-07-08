import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import CharacterList from './characterList';

import './index.scss';

const App = () => {
  return (
    <div>
      <Header />
      <section className="container">
        <CharacterList />
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
