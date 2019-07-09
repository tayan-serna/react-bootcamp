import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FavoriteContext from './favoriteContext';
import Header from './header';
import CharacterList from './characterList';
import Detail from './detail';

import './index.scss';

const App = () => {
  const [favoriteList, setFavoriteList] = useState({});
  return (
    <div>
      <Header />
      <section className="container">
        <Router>
          <Route path="/" exact component={CharacterList} />
          <FavoriteContext.Provider value={{ favoriteList, setFavoriteList }}>
            <Route path="/detail/:id" component={Detail} />
          </FavoriteContext.Provider>
        </Router>
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
