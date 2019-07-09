import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header';
import CharacterList from './characterList';
import Detail from './detail';

import './index.scss';

const App = () => {
  return (
    <div>
      <Header />
      <section className="container">
        <Router>
          <Route path="/" exact component={CharacterList} />
          <Route path="/detail/:id" component={Detail} />
        </Router>
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
