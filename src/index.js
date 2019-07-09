import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FavoriteContext from './favoriteContext';
import FilterContext from './filterContext';
import Header from './header';
import CharacterList from './characterList';
import Detail from './detail';

import './index.scss';

class App extends Component {
  state = {
    favoriteState: {
      favoriteList: {},
      setFavoriteList: newVal => {
        this.setState({
          ...this.state,
          favoriteState: {
            ...this.state.favoriteState,
            ...newVal
          }
        });
      }
    },
    filterState: {
      characters: [],
      filteredCharacters: [],
      filterValue: '',
      setFilterObject: newObj => {
        this.setState({
          ...this.state,
          filterState: {
            ...this.state.filterState,
            ...newObj
          }
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Header />
        <section className="container">
          <Router>
            <FilterContext.Provider value={this.state.filterState}>
              <Route path="/" exact component={CharacterList} />
            </FilterContext.Provider>
            <FavoriteContext.Provider value={this.state.favoriteState}>
              <Route path="/detail/:id" component={Detail} />
            </FavoriteContext.Provider>
          </Router>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
